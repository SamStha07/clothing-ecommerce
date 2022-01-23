import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from 'redux/user/user.actions';
import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import Auth from 'pages/auth/auth.component';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot((snapShot) => {
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
        });
      }

      dispatch(setCurrentUser(userAuth));
    });
  }, [dispatch]);

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route
          path='/signin'
          element={user.currentUser ? <Navigate to='/' /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
