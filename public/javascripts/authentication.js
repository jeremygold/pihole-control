
// Authentication support
var handleSignedInUser = function(user) {
    console.log("Handling signed in user " + user.email);
    document.getElementById('user-signed-in').style.display = 'block';
    document.getElementById('user-signed-out').style.display = 'none';
    document.getElementById('email').textContent = user.email;
    addDatabaseCallback();
};

var handleSignedOutUser = function() {
    console.log("Handling signed out user");
    document.getElementById('user-signed-in').style.display = 'none';
    document.getElementById('user-signed-out').style.display = 'block';
};

var addAuthButtonListeners = function() {
    document.getElementById('sign-out').addEventListener('click', function() {
        console.log("Signing out");
        firebase.auth().signOut().then(_ => {
            handleSignedOutUser();
        }).catch(_ => {
            console.log("Failed to sign out");
        });
    });

    document.getElementById('sign-in').addEventListener('click', function() {
        console.log("Signing in");
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(_ => {
            handleSignedInUser(result.user);
        }).catch(function(error) {
            // Handle Errors here.
            console.log("Failed to log in " + error.email);
        });
    });
}

function addAuthStateHandler() {
    firebase.auth().onAuthStateChanged(function(user) {
        console.log("AuthStateChanged");
        window.user = user;

        if(user != undefined) {
            handleSignedInUser(user);
        } else {
            handleSignedOutUser();
        }
    });
}

