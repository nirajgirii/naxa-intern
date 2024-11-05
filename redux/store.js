"use client";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import servicesReducer from "./servicesSlice";
import { watchFetchServices } from "./servicesSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchServices);
