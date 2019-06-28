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

  function signup(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(result){
           console.log(result)
           window.location.assign("./signinadmin.html")

        }
        )
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });
    }
    
    
    
    
    function signin() {
        // let name = document.getElementById("name").value
        // let fname = document.getElementById("fname").value
        let signinemail = document.getElementById('signinemail').value;
        let signinpassword = document.getElementById('signinpassword').value;
       firebase.auth().signInWithEmailAndPassword(signinemail, signinpassword)
       .then(function(results){
           console.log(results)
           window.location.assign("./adminhome.html")
       })
       .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            
          });
    }