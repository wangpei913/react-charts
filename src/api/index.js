import axios from '../utils/ajax';

// 获取charts页面的数据
export const chartsData = () => axios.get('./file.json')