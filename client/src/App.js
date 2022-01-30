import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import WithSpinner from './components/with-spinner/with-spinner.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CollectionsOverview = lazy(() =>
  import('./components/collections-overview/collections-overview.component')
);
const CollectionPage = lazy(() =>
  import('./pages/collection/collection.component')
);
const Auth = lazy(() => import('./pages/auth/auth.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

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
      // we are storing our SHOP_DATA into firestore
      // const collectionsArray useSelector((state) => selectCollectionArray(state));
      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
    });
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />

      <Header />

      <Suspense fallback={<WithSpinner />}>
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
      </Suspense>
    </div>
  );
}

export default App;
