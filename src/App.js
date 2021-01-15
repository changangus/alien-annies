import React, { useState, useEffect } from 'react';
import './App.css';
// dev dependent components
import { Route, Switch } from 'react-router-dom';
// page components
import Homepage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import RegisterAndSignInPage from './pages/register-page/register';
// Auth
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
      const unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
      return unSubscribeFromAuth;
      } 
    )
  }, []); 

  console.log(currentUser);

  return (
    <div>
      <Header currentUser={currentUser}/> 
      <Switch>
        <Route exact path='/' render={() => <Homepage />} />
        <Route exact path='/shop' render={() => <Shop /> } />
        <Route exact path='/signin' render={() => <RegisterAndSignInPage />} />
      </Switch>
    </div>

  );
}

export default App;
