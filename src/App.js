import React from 'react'
// import { Amplify } from 'aws-amplify'
// import {withAuthenticator} from 'aws-amplify-react-native'
// import awsconfig from './aws-exports'
import Home from './pages/Home'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css'
// import Details from './pages/Details'


// Amplify.configure(awsconfig)

const App = (props) => {
  return (
  <div>
    <Home default />
    {/* <Details path="/details/:propertyId" /> */}
  </div>
    );
  };

export default App;