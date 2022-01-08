import { CREATE, GETALL, UPDATE, DELETE } from "../constants/actionTypes.js";

export default (pfwarehouses = [], action) => {
    switch (action.type) {
        case GETALL:
            return action.payload;
        case CREATE:
            return [...pfwarehouses, action.payload];
        case UPDATE:
            return pfwarehouses.map((pfwarehouse)=>pfwarehouse._id===action.payload._id ? action.payload : pfwarehouse);
        case DELETE:
            return pfwarehouses.filter((pfwarehouse) => pfwarehouse._id !== action.payload);
        default:
            return pfwarehouses;
    }
}