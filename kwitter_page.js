var firebaseConfig = {
      apiKey: "AIzaSyCiqrCbC0rAxBIGfuPCHIhwI4F3XpOK8IY",
      authDomain: "kwitter-44cdb.firebaseapp.com",
      databaseURL: "https://kwitter-44cdb-default-rtdb.firebaseio.com",
      projectId: "kwitter-44cdb",
      storageBucket: "kwitter-44cdb.appspot.com",
      messagingSenderId: "779207045012",
      appId: "1:779207045012:web:0e03a6e6f2f6cfd3cf2981"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username");
var room_name = localStorage.getItem("room_name");  

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() {
       firebase.database().ref("/"+room_name).on('value', function(snapshot) {
              //document.getElementById("room_output").innerHTML = "";
               snapshot.forEach(function(childSnapshot) {
                      childKey  = childSnapshot.key; childData = childSnapshot.val(); 
                      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         var name = message_data['name'];
         var massage = message_data['message'];
         var like = message_data['like'];
         name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tage = "<h4 class='message_h4'>"+message+"</h4>";
         like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+ "onclick='updateLike(this.id)'>";
         span_wtih_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button><hr>";

         row = name_with_tag + message_with_tage + like_button + span_wtih_tag;
         document.getElementById("room_output").innnerHTML += row;
      } });  }); }
getData();



function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function updateLike(message_id){
      console.log("click on the button - "+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : update_likes
      });
}