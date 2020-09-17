import {createContext} from 'react';

const IdContext = createContext('DISM');

const IdProvider = IdContext.Provider;
const IdConsumer = IdContext.Consumer;

export {IdProvider, IdConsumer};
