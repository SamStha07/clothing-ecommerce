import './App.css';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import { useEffect, useState } from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth.component';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  console.log('user', currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user));
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
