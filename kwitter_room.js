

var firebaseConfig = {
      apiKey: "AIzaSyCcq8lR9Oyi30eZF3BsR-soL211qfb9amo",
      authDomain: "kwitter-2b121.firebaseapp.com",
      databaseURL: "https://kwitter-2b121-default-rtdb.firebaseio.com",
      projectId: "kwitter-2b121",
      storageBucket: "kwitter-2b121.appspot.com",
      messagingSenderId: "709099357720",
      appId: "1:709099357720:web:b9112b71687f446dda256d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
