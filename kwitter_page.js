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
roomname=localStorage.getItem("roomname");

function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=" ";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name1=message_data['name'];
         message1=message_data['message'];
         like1=message_data['like'];
         name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag="<h4 class='message_h4'>"+message1 +"</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+ " onclick='updatelike(this.id)'>";
         span_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button> <hr>";
         row=name_with_tag + message_with_tag + like_button + span_tag;
         document.getElementById("output").innerHTML +=row;
      } });  }); }
getData();


function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");

      window.location="index.html";
}

function updatelike(message_id) {
      console.log("click on like button-"+ message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedlikes=likes+1;
      console.log(updatedlikes);
      firebase.database().ref(roomname).child(message_id).update({
            like:updatedlikes
      });
}