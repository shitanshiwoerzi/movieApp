import React from "react";
import { useFirebaseApp } from 'reactfire' ;
import 'firebase/auth'
import Login from "../components/signIn";
import Logout from "../components/signOut";
import Signup from "../components/signUp";
import { positions, Provider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic'

const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };

const LoginPage = () =>{
    const firebase = useFirebaseApp();
    console.log(firebase);
    const user = firebase.auth().currentUser;
    if (user) {
        console.log("have signed in");
    } else {
        console.log("no user is signed in")
    }
      return(
      <>
      { user &&
      <>
      <p>have signed in</p>
      <Logout></Logout>
      </>
      }
      { !user &&
      <>
      <Provider template={AlertTemplate} {...options}>
      <p>no user is signed in</p>
      <Login />
      <Signup />
      </Provider>
      </>
      }
      
      </>
      );
}

export default LoginPage;