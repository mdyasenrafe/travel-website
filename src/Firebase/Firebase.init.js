import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.config";

const intilializeAuthFirebase = () => {
  initializeApp(FirebaseConfig);
};
export default intilializeAuthFirebase;
