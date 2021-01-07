import { atom } from 'recoil';
import axios from 'axios';

export * from './functions';

export const baseUrl = 'http://139.180.186.28';

export const axiosInstance = axios.create({
    baseURL: baseUrl,
})

export const STATE_HISTORY = atom ({
    key: 'historyState',
    default: [],
})

export const STATE_COMPANY = atom({
    key: 'companyState',
    default: {company: null, message: ""},
})


