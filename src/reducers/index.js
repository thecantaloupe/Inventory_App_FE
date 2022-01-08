import { combineReducers } from "redux";

import auth from './auth';
import local from './localhost';
import warehouses from "./warehouse";

export const reducers = combineReducers({ auth , local, warehouses });