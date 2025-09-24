import { Action, configureStore, createListenerMiddleware, Middleware, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "./slice/AppSlice";

export const listenerMiddleware = createListenerMiddleware();

const rootReducer = combineReducers({
    app: appReducer,
});

// Middleware для обработки ошибок
const errorMiddleware: Middleware = storeAPI => next => action => {
    try {
        return next(action);
    } catch (error) {
        console.error('Redux Error:', error);
        // Обрабатываем ошибку через ErrorHandler
        // errorHandler.handleAsyncError(error);
        return next(action);
    }
};

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware()
                .concat(errorMiddleware)
                .concat(listenerMiddleware.middleware),

    });
};

// Тип для thunk
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppGetState = AppStore['getState'];

export const store = setupStore();

