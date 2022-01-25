import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CollectionsOverview from './components/collections-overview/collections-overview.component';
import CollectionPage from './pages/collection/collection.component';
import Auth from './pages/auth/auth.component';
import CheckoutPage from './pages/checkout/checkout.component';

function App() {
  const currentUser = useSelector((state) => selectCurrentUser(state));

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
        <Route path='/shop' element={<ShopPage />}>
          <Route path='' element={<CollectionsOverview />} />
          <Route path=':collectionUrlParam' element={<CollectionPage />} />
        </Route>
        <Route
          path='/signin'
          element={currentUser ? <Navigate to='/' /> : <Auth />}
        />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
