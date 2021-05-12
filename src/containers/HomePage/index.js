import React, { useState, useEffect } from 'react';
import {getAllUsers, getUser} from '../../services/tinderService';

const UserCardList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await getAllUsers();
            setUsers(req.data);
        }

        fetchData();
    }, []);

    console.log(users);
};

export default UserCardList;
