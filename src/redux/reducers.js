import { combineReducers } from 'redux'
import { getChartsData, editClassDefaultValue } from './actions-types';

function saveChartsData(prevState, action) {
    switch (action.type) {
        case getChartsData:
                const a = action.data.map(item => {
                    return {
                        version_number: item.version_number,
                        dataset_name: item.dataset_name,
                        classifier_class: item.classifier_class,
                        classifier_data: [item.class_f1_score, item.class_npv, item.class_precision, item.class_recall]
                    }
                })
                const b = Array.from(new Set(a.map(c => c.classifier_class)))

            return {
                totalData: a,
                classOption: b,
                nameOption: Array.from(new Set(a.filter(v => v.classifier_class === b[0]).map(i => i.dataset_name))),
                defClass: b[0],
                classData: a.map(v => v.classifier_class === b[0] ? v : '').filter(t => t)
            }
        case editClassDefaultValue:
            return action.data
        default:
            return prevState || {}
    }
}

export default combineReducers({
    saveChartsData
})