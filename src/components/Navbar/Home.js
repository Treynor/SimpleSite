import React from 'react';
import { useFirebase } from '../../firebase/FirebaseContext';
import { collection, getDocs } from 'firebase/firestore';

function Home() {
  return <h2>Home Page</h2>;
}

export default Home;