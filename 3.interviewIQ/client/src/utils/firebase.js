
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-agent-ai-fsd.firebaseapp.com",
  projectId: "interview-agent-ai-fsd",
  storageBucket: "interview-agent-ai-fsd.firebasestorage.app",
  messagingSenderId: "237814681435",
  appId: "1:237814681435:web:737c78c8b0a5cadf11547e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}