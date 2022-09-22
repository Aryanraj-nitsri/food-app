import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyDoWSk3hy70TcHV6L0LW4tAIEWv1Haqt3Y",
    authDomain: "food-app-1a90a.firebaseapp.com",
    projectId: "food-app-1a90a",
    storageBucket: "food-app-1a90a.appspot.com",
    messagingSenderId: "757744665359",
    appId: "1:757744665359:web:37ec47529f02e457c4747a"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;