import customAxios from './custom-axios';

export const getAllUsers = (limit) => {
    return customAxios.get(`/user${(limit ? `?limit=${limit}` : '')}`);
};

export const getUser = id => {
    return customAxios.get(`/user/${id}`);
};
