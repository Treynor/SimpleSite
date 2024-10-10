import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

async function getUsers() {
  const usersCollection = collection(db, 'users');
  const userSnapshot = await getDocs(usersCollection);
  const userList = userSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return userList;
}

// Example usage
// getUsers().then(users => {
//   console.log(users);
// }).catch(error => {
//   console.error("Error fetching users:", error);
// });

export { getUsers };