import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './ducks/cars';
import layoutReducer from './ducks/layout';

/**
 * * Utilizando o configureStore já está implementado o iddleware redux thunk
**/
export default configureStore({
    reducer:{
        cars: carsReducer,
        layout: layoutReducer
    }
});