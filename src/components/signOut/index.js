import React from 'react' ;
import { useFirebaseApp } from 'reactfire' ;
import 'firebase/auth'
import { withRouter } from 'react-router-dom';

const Logout = (props) => {
  // Import firebase
  const firebase = useFirebaseApp();
 
  // Log out function
  const handleClick = e => {
    e.preventDefault();
    firebase.auth().signOut();
    props.history.push('/login');
  }
 
  return (
    <>
       <button type="button" onClick={handleClick}>Log Out</button> 
    </>
  )
};
 
export default withRouter(Logout);