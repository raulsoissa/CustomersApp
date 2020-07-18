import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

//handleActions permite tener varias acciones, y se hace un listado de acciones
// se pone el nombre de la [ACCION]: y se le asocia a una función donde el primer parametro es el State y el segundo es el valor de la accion 

export const customers  = handleActions({
    [FETCH_CUSTOMERS]: state => state,
}, {});

