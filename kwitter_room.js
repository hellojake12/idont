
var firebaseConfig = {
      apiKey: "AIzaSyBmKACosTg3Ehgh7q_h9APsRLe-hewU0Bs",
      authDomain: "visual1-c037c.firebaseapp.com",
      databaseURL: "https://visual1-c037c-default-rtdb.firebaseio.com",
      projectId: "visual1-c037c",
      storageBucket: "visual1-c037c.appspot.com",
      messagingSenderId: "214686257335",
      appId: "1:214686257335:web:27657048b0e8c9c51b3d32"
    };
    
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="welcome "+username+"!";

function addRoom() {
      room_name=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("roomname",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomnames created-"+Room_names);
       row="<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");

      window.location="index.html";
}