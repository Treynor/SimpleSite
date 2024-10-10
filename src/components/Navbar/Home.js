import React, { useState, useEffect } from 'react';
import { getUsers } from './Users';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <UserList users={users} />
    </div>
  );
}

export default Home;