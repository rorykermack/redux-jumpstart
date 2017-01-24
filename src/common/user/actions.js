import Firebase from 'firebase';

/* === Consts === */
export const USER_UPDATE_INFO = 'USER_UPDATE_INFO';
export const USER_GET_INFO = 'USER_GET_INFO';
export const USER_SET_PROFILE_PHOTO = 'USER_SET_PROFILE_PHOTO';


const firebaseUpdateUser = (info) => {
  return {
      then: function(callback) {
        const user = Firebase.auth().currentUser;
        Firebase.database().ref(`/users/${user.uid}`).update({
          about: info.about
        }).then(function() {
          // Update successful.
          callback({about: info.about});
        }, function(error) {
          // An error happened.
        });
    }
  };
};

const firebaseUpdateUserProfilePhoto = (info, data) => {
  return {
      then: (callback) => {
        const user = Firebase.auth().currentUser;
        console.log('info', info.profilePhoto);
        Firebase.database().ref(`/users/${user.uid}`).update({
          profilePhoto: info.profilePhoto
        }).then(() => {
          // Update successful.
          callback({profilePhoto: info.profilePhoto});
        }, function(error) {
          // An error happened.
        });
    }
  };
};

const fireBaseUploadProfileImage = (info) => {
  return {
    then: (callback) => {
      // Create a root reference
      const storageRef = Firebase.storage().ref();
      // const randomUploadPath =
      // console.log(storageRef);
      const path = `${info.path}/${info.file.name}`;
      var imageRef = storageRef.child(path);
      imageRef.put(info.file).then(function(snapshot) {
        console.log('Uploaded a blob or file!', snapshot);
        callback(snapshot);
      });
    }
  }
}

const firebaseGetUserInfo = () => {
  return {
    then: function(callback) {
      const user = Firebase.auth().currentUser;
      Firebase.database().ref(`/users/${user.uid}`).once('value').then((snapshot) => {
        const about = snapshot.val().about || "";
        const profilePhoto = snapshot.val().profilePhoto || "";
        callback({
          about: about,
          profilePhoto: snapshot.val().profilePhoto
        });
      });
    }
  }
};


/* --- Actions --- */
export function user_update_info(info) {
  return (dispatch) => {
    return firebaseUpdateUser(info).then(data => dispatch(user_update_info_complete(data, info)));
  }
}

export function user_update_profile_photo(info) {
  return (dispatch) => {
    return fireBaseUploadProfileImage(info).then(data => dispatch(user_set_profile_photo(data, info)));
  }
}

export function user_set_profile_photo(info, data) {
  console.log('setRPof', info, data)
  firebaseUpdateUserProfilePhoto({profilePhoto: {url: info.downloadURL, folderPath: info.a.fullPath}}).then(() => {});
  console.log(info.downloadURL);
  return {
    type: 'USER_SET_PROFILE_PHOTO',
    payload: {
      profilePhoto: {url: info.downloadURL, folderPath: info.a.fullPath}
    }
  };

}

export function user_get_info() {
  return (dispatch) => {
    return firebaseGetUserInfo().then(data => dispatch(user_get_info_complete(data)));
  }
}


export function user_update_info_complete(data, info) {
  console.log('data', data)
  return {
    type: 'USER_UPDATE_INFO',
    payload: data
  }
}

export function user_get_info_complete(data) {
  return {
    type: 'USER_GET_INFO',
    payload: data
  }
}
