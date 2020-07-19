import { createSelector } from 'reselect';

export const getCustomers = state => state.customers;

export const getCustomerByRut =  createSelector(
    (state, props) => state.customers.find( c => c.rut === props.rut),
    customer => customer
);