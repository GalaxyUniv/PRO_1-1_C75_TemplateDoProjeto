import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAiAOTNR-Tb-xCcF7KoFFGSzi20rzDZj44",
  authDomain: "projeto-daacf.firebaseapp.com",
  projectId: "projeto-daacf",
  storageBucket: "projeto-daacf.appspot.com",
  messagingSenderId: "288931822036",
  appId: "1:288931822036:web:39d99f20c94d7c2adf3e41"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
