
// Status management support
function initFirebaseSdk() {
    try {
        let app = firebase.app();
        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;

    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
}

function addDatabaseCallback() {
    firebase.database().ref(stateRef).on('value', function(snapshot) {
        console.log("Dbase change detected - updating status");
        setStatus(snapshot.val().stat);
    });
}

function queryDatabaseStatus() {
    firebase.database().ref(stateRef).once('value').then(snapshot => {
        console.log("Current Status is " + snapshot.val().stat);
        setStatus(snapshot.val().stat);
    });
}

function setStatus(status) {
    console.log("Status = " + JSON.stringify(status));
    document.getElementById('status').innerHTML = "STATUS: " + status.toUpperCase();
    var statusAlert = document.getElementById('status-alert');
    if(status === "Enabled") {
        statusAlert.classList.add('alert-enabled');
        statusAlert.classList.remove('alert-disabled');
    } else {
        statusAlert.classList.add('alert-disabled');
        statusAlert.classList.remove('alert-enabled');
    }
}

const disable = _ => changeStatus("Disabled");
const enable = _ => changeStatus("Enabled");

// const initStatus = _ => fetch("/status").then(response => { response.text().then(setStatus); });

const stateRef = 'pihole-state';

function changeStatus(newStatus) {
    firebase.database().ref(stateRef).set({stat: newStatus}).then(_ => {
        console.log("Updated database to " + newStatus)
    }).catch(e => {
        console.log("Error updating database: " + e);
    });
}

function initialize() {
    addAuthButtonListeners();
    addAuthStateHandler();
    initFirebaseSdk();
    queryDatabaseStatus();
}

