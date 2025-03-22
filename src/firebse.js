// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate.firebaseapp.com",
  projectId: "mern-estate",
  storageBucket: "mern-estate.appspot.com",
  messagingSenderId: "1078482850952",
  // appId: "1:1078482850952:web:28f19139ab77246602fb3d",
  appId: "1:230823398987:web:c4d31799a3bf482e6047ce",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDd6wJ2MMHCrp3MZP6j2y10jbqyNqa2z6o",
//   authDomain: "amnirealotors.firebaseapp.com",
//   projectId: "amnirealotors",
//   storageBucket: "amnirealotors.firebasestorage.app",
//   messagingSenderId: "230823398987",
//   appId: "1:230823398987:web:c4d31799a3bf482e6047ce",
//   measurementId: "G-2EMHH59R6Y",
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
