import { of } from 'rxjs';

export class AngularFireFunctionsStub {}
export class AngularFireAuthStub {}
export class SwalServiceStub {}
export class UserServiceStub {
  getAllBorrowings = () => {
    return [];
  };
  getUserBorrowings = () => {
    return new Promise((reject, resolve) => {});
  };

  getCurrentUserInfo = () => {
    return of({});
  };

  getUserTopics = () => {
    return of([]);
  };
}
export class BookServiceStub {
  checkBookAvailabilityStatus = () => {
    return new Promise((reject, resolve) => {});
  };
}

export class FileUploadServiceStub {}

export class OverallServiceStub {
  getNoticeTopics = () => {
    return of(['topic 1', 'topic 2']);
  };
}

export class FcmServiceStub {
  getPermission = () => {
    return new Promise((res, rej) => {});
  };
}
export class EventLoggerServiceStub {}
