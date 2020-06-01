import IUser, { IOccupation, IUserData, IUserGeneral } from './IUser';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default class User implements IUser {
  private _general: IUserGeneral;

  private _occupation?: IOccupation;

  constructor(properties: IUser) {
    this._general = properties.general;
    this._occupation = properties.occupation;
  }

  public get general(): IUserGeneral {
    return this._general;
  }

  public get occupation(): IOccupation | undefined {
    return this._occupation;
  }

  public async refreshUser(): Promise<User> {
    const user = await User.fetchUserDetails(this.general.uid);

    this._general = user.general;
    this._occupation = user.occupation;

    return this;
  }

  public async updateUserDetails(newDetails: IUser): Promise<User> {
    await firebase
      .firestore()
      .doc(`users/${newDetails.general.uid}`)
      .update(newDetails);

    this._general = newDetails.general;
    this._occupation = newDetails.occupation;

    return this;
  }

  public async createAsNewUser(details: IUser): Promise<User> {
    const currentUserDoc = await firebase
      .firestore()
      .doc(`users/${details.general.uid}`)
      .get();

    if (currentUserDoc.exists) {
      throw new Error('user with this ID already exists');
    }

    await firebase
      .firestore()
      .doc(`users/${details.general.uid}`)
      .set(details);

    this._general = details.general;
    this._occupation = details.occupation;

    return this;
  }

  public static async fetchUserDetails(id: string): Promise<User> {
    const doc = await firebase
      .firestore()
      .doc(`users/${id}`)
      .get();

    const userData = doc.data() as IUserData;

    if (!userData) {
      throw new Error('user does not exist');
    }

    const date = userData.general.dateOfBirth.toDate();

    const user = {
      general: {
        ...userData.general,
        dateOfBirth: date,
      },
      occupation: userData.occupation,
    } as IUser;

    return new User(user);
  }
}
