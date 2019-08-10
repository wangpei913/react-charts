import { chartsData } from '../api/index';
import { getChartsData, editClassDefaultValue } from './actions-types';

export const getChartsDataModule = (data) => {
    return { type: getChartsData, data }
}
export const setChartsData = () => {
    return async (dispatch) => {
        const result = await chartsData();
        dispatch(getChartsDataModule(result.data))
    }
}
export const editDefaultValueModule = (data) => {
    return { type: editClassDefaultValue, data}
}
export const editDefaultValue = (data) => {
    return (dispatch) => {
        dispatch(editDefaultValueModule(data))
    }
}