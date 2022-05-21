import React from 'react'
import Home from './pages/Home'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css'
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


const App = ({ signOut, user }) => {
  return (
      <div>
        <Home signout={ signOut } username={ user.username }/>
      </div>
    );
  };

export default withAuthenticator(App);