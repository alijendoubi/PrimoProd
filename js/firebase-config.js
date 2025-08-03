// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdgqj-UiDyAfDHWWz2i9DcvGgf3Vr7EQw",
    authDomain: "primoprod-8390e.firebaseapp.com",
    projectId: "primoprod-8390e",
    storageBucket: "primoprod-8390e.firebasestorage.app",
    messagingSenderId: "1020027336436",
    appId: "1:1020027336436:web:01b5fb2d6c7d8c8f9e2e5a",
    measurementId: "G-KGPMHWFXGZ"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

// Get Firestore database reference
const db = firebase.firestore();
