import { axiosInstance } from './index';
import dayjs from 'dayjs';

export const F_LOGIN = (data, cb) => {
    axiosInstance({
        url: '/users/login',
        method: 'POST',
        data,
        headers: {
            jwttoken: localStorage.getItem('charttoken')
        }
    })
    .then(({data}) => {
        localStorage.setItem('charttoken', data.token);
        setTimeout(() => {
            cb(null, data);
        }, 2000)
    })
    .catch(err => {
        cb(true, null)
    })
};

export const F_REGISTER = (data,cb) => {
    axiosInstance({
        url: '/users',
        method: 'POST',
        data,
        headers: {
            jwttoken: localStorage.getItem('charttoken')
        }
    })
    .then(({data}) => {
        cb(null,data);
    })
    .catch(err => {
        cb(err, null);
    })
};

export const F_GET_COMPANY = (cb) => {
    axiosInstance({
        url: '/company',
        method: 'GET',
        headers: {
            jwttoken: localStorage.getItem('charttoken')
        }
    })
    .then(({data}) => {
        cb(null, data)
    })
    .catch(err => alert("Internal server error"))
};

export const F_HISTORY_PROCESS = (data, cb) => {
    let data2 = [];
    data.forEach(item => {
        let itemDate = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm')
        let sub = {
            x: new Date(itemDate).getTime(),
            y: item.assets
        };
        data2.push(sub)
    })
    cb(data2);
};

export const F_GET_HISTORY = (cb) => {
    axiosInstance({
        url: '/history',
        method: 'GET',
        headers: {
            jwttoken: localStorage.getItem('charttoken')
        }
    })
    .then(({data}) => {
        F_HISTORY_PROCESS(data, (value) => {

            cb(null,value);
        })
    })
    .catch(err => cb(err, null))
};

export const F_CREATE_ASSETS = (data, cb) => {
    axiosInstance({
        url: '/stock',
        data,
        method: 'POST',
        headers: {
            jwttoken: localStorage.getItem('charttoken')
        }
    })
    .then(({data}) => {
        let itemDate = dayjs(data.createdAt).format('YYYY-MM-DD HH:mm:ss')
        let sub = {
            x: new Date(itemDate).getTime(),
            y: data.assets
        };
        cb(null, sub)
    })
};


// {
//     x: new Date('2018-02-03').getTime(),
//     y: 0
//   }