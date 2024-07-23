import React, { useState ,useEffect } from 'react';
import axios from 'axios';
// import { BASE_URL } from '../config';

const AdminList = () => {
  const [users, setUsers] = useState([]);
  // const [token, setToken] = useState('');
  
  // useEffect(() => {
  //   // Fetch the token from where it is stored (e.g., local storage or state management)
  //   // Modify this based on how you store the token
  //   const storedToken = localStorage.getItem('token');
  //   setToken(storedToken);

  //   const getUsers = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/getadmins', {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });
  //       console.log(response);
  //       const users = response.data;
  //     setUsers(users);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   getUsers();
  // }, [token]);

 

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/api/getadmins");
      const users = response.data;
     
      setUsers(users);
    };

    getUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username} - {user.email}</li>
          
        ))}
      </ul>
    </div>
  );
};
export default AdminList;