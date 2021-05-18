import customAxios from './custom-axios';

export const getAllUsers = (limit, page) => {
    return customAxios.get(`/user?limit=${limit ? limit : 20}&page=${page ? page : 0}`);
};

export const getUser = id => {
    return customAxios.get(`/user/${id}`);
};
