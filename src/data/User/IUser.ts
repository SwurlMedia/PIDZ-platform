import firebase from 'firebase';

interface IUser {
  readonly general: IUserGeneral;
  readonly occupation?: IOccupation;
}

interface IUserGeneral {
  firstName: string;
  lastName: string;
  email: string;
  uid: string;
  dateOfBirth: Date;
  profileImgUrl?: string;
}

interface IOccupation {
  educationLevel: EEducationLevel;
  study?: string;
  speciality?: string;
}

enum EEducationLevel {
  OTHER = 'Overig',
  MBO1 = 'MBO niveau 1',
  MBO2 = 'MBO niveau 2',
  MBO3 = 'MBO niveau 3',
  MBO4 = 'MBO niveau 4',
  HBO_BACH = 'HBO Bachelor',
  HBO_MAST = 'HBO Master',
  WO_BACH = 'WO Bachelor',
  WO_MAST = 'WO Master',
  DR = 'Doctoraat',
}

interface IUserData {
  general: {
    dateOfBirth: firebase.firestore.Timestamp;
    firstName: string;
    lastName: string;
    email: string;
    uid: string;
    profileImgUrl?: string;
  };
  occupation: IOccupation;
}

export default IUser;

export { IUserGeneral, IOccupation, EEducationLevel, IUserData };
