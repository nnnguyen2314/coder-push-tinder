import customAxios from './custom-axios';

export const getAll = (limit) => {
    return customAxios.get(`/user${(limit ? `?limit=${limit}` : '')}`);
}

export const get = id => {
    return customAxios.get(`/user/${id}`);
}