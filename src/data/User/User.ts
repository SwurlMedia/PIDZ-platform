import IUser, { IOccupation, IUserData, IUserGeneral } from './IUser';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

  public async createAsNewUser(): Promise<User> {
    const currentUserDoc = await firebase
      .firestore()
      .doc(`users/${this.general.uid}`)
      .get();

    if (currentUserDoc.exists) {
      throw new Error('user with this ID already exists');
    }

    const details = {
      general: this.general,
      occupation: this.occupation,
    };

    await firebase
      .firestore()
      .doc(`users/${this.general.uid}`)
      .set(details);

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

  public static async signIn(email: string, password: string): Promise<User> {
    await firebase.auth().signInWithEmailAndPassword(email, password);

    const userCred = firebase.auth().currentUser;

    if (!userCred) {
      throw new Error('user is not defined');
    }

    const { uid } = userCred;

    const userDetails = await User.fetchUserDetails(uid);

    return new User(userDetails);
  }

  public static async signOut(): Promise<void> {
    return firebase.auth().signOut();
  }

  public static async signUp(userDetails: IUser, password: string): Promise<User> {
    await firebase.auth().createUserWithEmailAndPassword(userDetails.general.email, password);
    const currentUser = await firebase.auth().currentUser;

    if (!currentUser) {
      throw new Error('user is not defined');
    }

    const user = new User({
      general: {
        ...userDetails.general,
        uid: currentUser.uid,
      },
      occupation: userDetails.occupation,
    });
    await user.createAsNewUser();

    return user;
  }
}
