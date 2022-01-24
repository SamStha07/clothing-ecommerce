import React from 'react';

import './auth.styles.scss';

import SignIn from 'src/components/sign-in/sign-in.component';
import SignUp from 'src/components/sign-up/sign-up.component';

const Auth = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
