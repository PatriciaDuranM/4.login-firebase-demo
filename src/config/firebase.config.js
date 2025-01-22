// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: 'AIzaSyC7WB69TGxUG0UOSf-Tgb52JF8UoP5VRZ4',

	authDomain: 'fir-demo-4555b.firebaseapp.com',

	projectId: 'fir-demo-4555b',

	storageBucket: 'fir-demo-4555b.firebasestorage.app',

	messagingSenderId: '964036531576',

	appId: '1:964036531576:web:5ce2498f5056406a40e48d'
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
