var firebaseConfig = {
      apiKey: "AIzaSyCiqrCbC0rAxBIGfuPCHIhwI4F3XpOK8IY",
      authDomain: "kwitter-44cdb.firebaseapp.com",
      databaseURL: "https://kwitter-44cdb-default-rtdb.firebaseio.com",
      projectId: "kwitter-44cdb",
      storageBucket: "kwitter-44cdb.appspot.com",
      messagingSenderId: "779207045012",
      appId: "1:779207045012:web:0e03a6e6f2f6cfd3cf2981"
    };

var username = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });

      document.getElementById("smg").value = "";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}