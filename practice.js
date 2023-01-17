
//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDSPWgJj9H_nakEN4qav8irjgAb2lpG2jo",
  authDomain: "teste-da-aula-bd91f.firebaseapp.com",
  databaseURL: "https://teste-da-aula-bd91f-default-rtdb.firebaseio.com",
  projectId: "teste-da-aula-bd91f",
  storageBucket: "teste-da-aula-bd91f.appspot.com",
  messagingSenderId: "361156814947",
  appId: "1:361156814947:web:62c38c931b49e47266b056"
};

// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adicionando usuário"
  });
}


