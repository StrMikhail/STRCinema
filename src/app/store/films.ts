import { IFilmList, IFilmItem } from './../interfaces/topFilms.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilmState = {
    films: IFilmItem[]
}

const initialState: FilmState = {
    films: []
}

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        requestFilms(state, action: PayloadAction<string>) {

        }

    },
});

const { reducer: filterReducer, actions } = filmsSlice;
export const { requestFilms } = actions;


export default filterReducer;
