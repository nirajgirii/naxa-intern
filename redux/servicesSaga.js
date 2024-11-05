import { call, put, takeLatest } from "redux-saga/effects";
import { fetchServicesSuccess, fetchServicesFailure } from "./servicesSlice";

function* fetchServicesSaga() {
  try {
    const response = yield call(
      fetch,
      "https://admin.naxa.com.np/api/services"
    );
    const data = yield response.json();
    yield put(fetchServicesSuccess(data));
  } catch (error) {
    yield put(fetchServicesFailure(error.message));
  }
}

export function* watchFetchServices() {
  yield takeLatest("services/fetchServices", fetchServicesSaga);
}
