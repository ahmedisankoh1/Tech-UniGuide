import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"; // Import storage

const firebaseConfig = {
apiKey: "AIzaSyBrJ5hgWJbJL7z4OcTPl9uTpcZ9_5lkpbs",
authDomain: "tech-uniguide.firebaseapp.com",
projectId: "tech-uniguide",
storageBucket: "tech-uniguide.firebasestorage.app",
messagingSenderId: "1023591278285",
appId: "1:1023591278285:web:37de64184e5dc42552eb84",
measurementId: "G-1Z49M6FK6C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize storage

export { app, auth, db, storage };