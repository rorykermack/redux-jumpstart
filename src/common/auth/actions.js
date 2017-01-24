/* Libs */
import {fakeNetworkCall} from '../utils/fakeNetworkCall';
import Firebase from 'firebase';

/* === Consts === */
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_UPDATE_USER = 'AUTH_UPDATE_USER';
export const AUTH_ENLIST = 'AUTH_ENLIST';


// import Ajax from '../utils/ajax';
// export function auth_login(info) {
//   return (dispatch) => {
//      return Ajax.post('http://localhost:2015/api/v2/auth/login', {
//        email: info.username,
//        password: info.password
//      }).then(data => dispatch(auth_login_complete(data)))
//   }
// }

/* --- Actions --- */
function firebaseLogin({email, password}) {
  return {
      then: (callback) => {
        Firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
          console.log('suyccess data', data)
          callback(data)
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  };
};

function firebaseLogout() {
  Firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }, (error) => {
    // An error happened.
    callback('error');
  });
}

function firebaseUpdateUser(info) {
  return {
      then: (callback) => {
        const user = Firebase.auth().currentUser;
        user.updateProfile({
          displayName: info.displayName,
        }).then(() => {
          // Update successful.
          callback({name: info.displayName});
        }, (error) => {
          // An error happened.
        });
    }
  };
}

function firebaseEnlistUser(info) {
  return {
    then: (callback) => {
      const {
        email,
        password
      } = info;
      Firebase.auth().createUserWithEmailAndPassword(
        email,
        password
      ).then(() => {
        // Update successful.
        callback(true);
      }, (error) => {
        // An error happened.
      });
    }
  }
}

export function auth_update_user(info) {
  return (dispatch) => {
    return firebaseUpdateUser({
      displayName: info.displayName
    }).then(data => dispatch(auth_update_user_complete(data)));
  }
}

export function auth_update_user_complete(data) {
  return {
    type: 'AUTH_UPDATE_USER',
    payload: {
      data: data
    }
  }
}

export function auth_login(info) {
  return (dispatch) => {
     return firebaseLogin({
       email: info.username,
       password: info.password
     }).then(data => dispatch(auth_login_complete(data)));
  }
}

export function auth_enlist(info) {
  return (dispatch) => {
    return firebaseEnlistUser({
      email: info.email,
      password: info.password
    }).then(data => dispatch(auth_enlist_complete(data, info)));
  }
}

export function auth_login_complete(info) {
  return {
    type: 'AUTH_LOGIN',
    payload: {
      user: info
    }
  }
}


export function auth_enlist_update_name(data, info) {
  return (dispatch) => {
    return firebaseUpdateUser({
      displayName: info.firstName
    }).then(data => dispatch(auth_enlist_complete(data)));
  }
}

export function auth_enlist_complete(data) {
  return {
    type: 'AUTH_ENLIST',
    payload: {
      user: data
    }
  }
}

export function auth_logout() {
  firebaseLogout();
  return {
    type: 'AUTH_LOGOUT'
  }
}
