import React, { useEffect, useState } from 'react'
import axios from "axios";
import { API } from "../../services/api";

export default function UsersComponenet () {

    const [users, setUsers] = useState([]);



    useEffect(() => {
        API.get('users').then(res => {
            /* console.log('>> default >>  res', res); */
            setUsers(res.data.docs);
        })
    }, []) 
/* useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`${API}users`);
      setUsers(res.data);
      console.log(res.data);
    };

    getUsers();
  }, []);
 */

    return (
        <ul className="c-user">
           {/*  {users?.map((user, index) => <li key={index}>{user?.name}</li>)} */}
        </ul>
    );
}
