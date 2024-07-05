
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyBAltXupZO_LOgjBPsaFlnYqS755G4rt1M",
  authDomain: "food-app-42a6c.firebaseapp.com",
  projectId: "food-app-42a6c",
  storageBucket: "food-app-42a6c.appspot.com",
  messagingSenderId: "32002490279",
  appId: "1:32002490279:web:0ca6b8315dd433b2990082",
  measurementId: "G-MJXL2JP2B8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
