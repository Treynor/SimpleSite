import React from 'react';
import { getUsers } from './Users';


function Home() {
  return <h2>Home Page</h2>;
  

}

async function displayUsers() {
  try {
    const users = await getUsers();
    users.forEach(user => {
      console.log(`User ${user.id}: ${user.name}`);
    });
  } catch (error) {
    console.error("Error displaying users:", error);
  }
}

displayUsers();

export default Home;