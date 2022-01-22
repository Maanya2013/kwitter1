
const firebaseConfig = {
      apiKey: "AIzaSyB_Wre5mOtrvqGnMy-ADPXoq5Ns8OYe9j4",
      authDomain: "kwitter-a0ecd.firebaseapp.com",
      databaseURL: "https://kwitter-a0ecd-default-rtdb.firebaseio.com",
      projectId: "kwitter-a0ecd",
      storageBucket: "kwitter-a0ecd.appspot.com",
      messagingSenderId: "237387346019",
      appId: "1:237387346019:web:c69c99042a0a6c9504c856",
      measurementId: "G-8VCW7FJ0LG"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose: "adding room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      }


      function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
      }


 function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
 }