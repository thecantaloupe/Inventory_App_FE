import { combineReducers } from "redux";

import auth from './auth';
import local from './localhost';
import pfwarehouse from "./pfwarehouse";

export const reducers = combineReducers({ auth , local, pfwarehouse });