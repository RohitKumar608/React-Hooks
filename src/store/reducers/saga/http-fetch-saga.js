import { put, takeEvery, all } from "redux-saga/effects";
import {
  startFetching,
  successFetching,
  failedFetching
} from "./../../actions/http-handler";

function* increment() {
  yield put({ type: "INCREMENT_BY_ONE" });
}

function* decrement() {
  yield put({ type: "DECREMENT_BY_ONE" });
}

function* helloSaga() {
  yield 1;
  console.log("Hello Saga! Get stared.");
}
function* fetchData() {
  yield put(startFetching());
  try {
    let data = yield fetch("https://reqres.in/api/users?page=1&per_page=12", {
      method: "GET"
    });
    data = yield data.text();
    const getData = yield JSON.parse(data);
    yield put(successFetching(getData.data));
  } catch (error) {
   yield put(failedFetching());
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    takeEvery("FETCHING_INITIALIZE", fetchData),
    takeEvery("INCREMENT", increment),
    takeEvery("DECREMENT", decrement)
  ]);
}
