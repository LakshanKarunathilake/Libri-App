export interface User {
  displayName: string;
  email: string;
  emailVerified: boolean;
  libraryID: string;
  phoneNumber: string;
  uid: string;
  topics?: Array<string>;
}
