import { all, fork } from "redux-saga/effects";
import { watchLoginSaga } from "./authSaga";
import { watchUserSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([fork(watchUserSaga), fork(watchLoginSaga)]);
}
