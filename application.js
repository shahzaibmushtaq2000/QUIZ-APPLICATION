// Initialize Firebase
var config = {
    apiKey: "AIzaSyAjKtPxi-cIvr9UTaR5-JXpDqUCGll6fds",
    authDomain: "signinfree-639c1.firebaseapp.com",
    databaseURL: "https://signinfree-639c1.firebaseio.com",
    projectId: "signinfree-639c1",
    storageBucket: "signinfree-639c1.appspot.com",
    messagingSenderId: "153595575487"
  };
  firebase.initializeApp(config);


  function loginWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            let user = result.user;
            let userData = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                uid: user.uid
            }
            firebase.database().ref().child(`users/${userData.uid}`).set(userData)
                .then(() => {
  window.location.assign(
    "./sucess.html"
  )
                })
        }).catch(function (error) {
            console.log("error===>", error)
        });
}

var questions = [];
var count = 0
getdata()
function getdata() {
    // var uid = firebase.auth().currentUser.uid;
    firebase.database().ref('/').child(`question`).on('child_added', (data) => {
        console.log(data.val())
        questions.push(data.val())
    })
}

function renderQuestion() {
    var q = document.getElementById('q');
    var opt1 = document.getElementById('opt1');
    var opt2 = document.getElementById('opt2');
    var opt3 = document.getElementById('opt3');
    q.innerHTML = questions[count].question
    opt1.innerHTML = questions[count].option1
    opt2.innerHTML = questions[count].option2
    opt3.innerHTML = questions[count].option3

}
function nextQuestion() {
    count++
    var q = document.getElementById('q');
    var opt1 = document.getElementById('opt1');
    var opt2 = document.getElementById('opt2');
    var opt3 = document.getElementById('opt3');
    q.innerHTML = questions[count].question
    opt1.innerHTML = questions[count].option1
    opt2.innerHTML = questions[count].option2
    opt3.innerHTML = questions[count].option3
    
}

function saveQuestion() {
    var question = document.getElementById("question");
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var key = firebase.database().ref('/').child('questions').push().key;
    let questionDetail = {
        question: question.value,
        option1: option1.value,
        option2: option2.value,
        option3: option3.value,
        key: key
    }
    console.log(questionDetail)
    firebase.database().ref('/').child(`question/${key}`).set(questionDetail)

}

function saveQuestion(){
    var question = document.getElementById("question");
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var key = firebase.database().ref('/').child('questions').push().key;
    let questionDetail = {
        question: question.value,
        option1: option1.value,
        option2: option2.value,
        option3: option3.value,
        key: key
    }
    console.log(questionDetail)
    firebase.database().ref('/').child(`question/${key}`).set(questionDetail)

}


function getdata(){
    // var uid = firebase.auth().currentUser.uid;
    firebase.database().ref('/').child(`users`).on('child_added',(data)=>{
        console.log(data.val())
    })
}

