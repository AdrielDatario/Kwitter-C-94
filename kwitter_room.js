var firebaseConfig = {
      apiKey: "AIzaSyCiqrCbC0rAxBIGfuPCHIhwI4F3XpOK8IY",
      authDomain: "kwitter-44cdb.firebaseapp.com",
      databaseURL: "https://kwitter-44cdb-default-rtdb.firebaseio.com",
      projectId: "kwitter-44cdb",
      storageBucket: "kwitter-44cdb.appspot.com",
      messagingSenderId: "779207045012",
      appId: "1:779207045012:web:0e03a6e6f2f6cfd3cf2981"
    };

    firebase.initializeApp(firebaseConfig);

      var username = localStorage.getItem("user_name");
      var room_name = localStorage.getItem("room_name");  
      document.getElementById("welcome").innerHTML = "welcome "+username+"!";

function addroom(){
      room_name = document.getElementById("roominput").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("room_output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names)
      row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("room_output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}