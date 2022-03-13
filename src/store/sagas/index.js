import { all, fork } from "redux-saga/effects";
import { watchLoginSaga } from "./authSaga";
import { watchUserSaga } from "./userSaga";
import { watchuserProfileSaga } from "./userProfileSaga";

export default function* rootSaga() {
  yield all([fork(watchUserSaga), fork(watchLoginSaga), fork(watchuserProfileSaga)]);
}
