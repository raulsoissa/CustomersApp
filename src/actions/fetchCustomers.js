import { FETCH_CUSTOMERS } from '../constants';
import { createAction } from 'redux-actions';

const customers = [
    {
        "rut": "20200489-k",
        "name": "Raúl Soissa",
        "age": 21
    },
    {
        "rut": "11289793-3",
        "name": "Elsa Rodríguez",
        "age": 51
    },
    {
        "rut": "27000000-5",
        "name": "Juan Perez",
        "age": 45
    }
];


export const fetchCustomers = createAction(FETCH_CUSTOMERS);