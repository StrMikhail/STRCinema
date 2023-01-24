import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filmsReducer from './films'

const rootReducer = combineReducers({
    films: filmsReducer,
});


const store = configureStore({
    reducer: {
        films: filmsReducer
    }
})
export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
