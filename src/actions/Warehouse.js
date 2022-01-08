import * as api from '../api'
import { CREATE, GETALL, LOCALSTORE, UPDATE, DELETE } from '../constants/actionTypes'

export const getWarehouse = () => async (dispatch) => {
    try {
        const {data} = await api.fetchWarehouse()
        // var idArr = data.reduce(function (newArr, data) {
        //     newArr.push(data._id);
        //     return newArr;
        //   }, []);
        // console.log(idArr)
        dispatch({ type: GETALL, payload: data})
        // dispatch({ type: LOCALSTORE, data: data})
    } catch (error) {
        console.log(error.message)
    }  
}

// export const updateStorage = (warehouse,randomCard) => async (dispatch) => {
//     try {
//         const {data} = {warehouse,randomCard}
//         dispatch({ type: LOCALSTORE, data: data})
//     } catch (error) {
//         console.log(error.message)
//     }  
// }

export const createWarehouse = (warehouse) => async (dispatch) => {
    try {
        const {data} = await api.createWarehouse(warehouse)

    dispatch({ type: CREATE, payload: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const updateWarehouse = (id, warehouse) => async (dispatch) => {
    try {
        const {data} = await api.updateWarehouse(id, warehouse)

    dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const deleteWarehouse = (id) => async (dispatch) => {
    try {
        await api.deleteWarehouse(id)
        console.log(id)
    dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error.message)
    }  
}