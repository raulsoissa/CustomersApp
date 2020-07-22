import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMERS } from '../constants';

//handleActions permite tener varias acciones, y se hace un listado de acciones
// se pone el nombre de la [ACCION]: y se le asocia a una función donde el primer parametro es el State y el segundo es el valor de la accion 

export const customers  = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [ ...state, action.payload],
    [UPDATE_CUSTOMERS]: (state, action) => {
        const customerPayload = action.payload;
        const { id } = customerPayload;
        const customers = state;
        const initialValues = [];
        const newCustomers = customers.reduce( (acc, customer) => {
            if (customer.id === id) {
                return [...acc, customerPayload];
            } else {
                return [ ...acc, customer];
            }
        }, initialValues );
        return newCustomers;
    }
}, []);

