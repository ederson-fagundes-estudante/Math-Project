firebase.initializeApp({
    apiKey: "AIzaSyDl785eM9chaZN0XBPfRJW1c8TuwgrPLag",
    authDomain: "databaseteste01.firebaseapp.com",
    projectId: "databaseteste01",
    storageBucket: "databaseteste01.appspot.com",
    messagingSenderId: "856542778488",
    appId: "1:856542778488:web:3c2bea09a1a1b7e82c498d",
    measurementId: "G-0LQ7NPQ58L"
});
  
var db = firebase.firestore();

function adicionarDados(nome1, valor2){
    db.collection("Pontuação").add({
        Nome: nome1,
        Valor: valor2
    })
    
}


  