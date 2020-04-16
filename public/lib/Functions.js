export function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(snap => {
            saveUser(snap.user)
            return snap.user
        })
}

function saveUser(user) {
    let { displayName, uid, photoURL, email } = user
    let u = {
        displayName,
        uid,
        photoURL,
        email
    }
    usersRef.doc(user.uid).set(u)
    // local
    localStorage.user = JSON.stringify(u)
}


export function logIn(email, password){
    console.log('LogIn - Email: '+email+', Password: '+password);
}

export function registerUser(email, password){
    console.log('Register - Email: '+email+', Password: '+password);
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(snap){
        console.log(snap)
        let mail=snap.user.email
        alert(`${mail} se registro correctamente`)
        return snap.user
    }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
        alert(`${errorCode} ${errorMessage} no se puede`)
        return error
      });
}