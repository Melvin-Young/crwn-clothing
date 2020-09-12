import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAy5EFb-qE2T2DoyhAW0sbz6kPoIL-ZTgg',
	authDomain: 'crown-db-8bcd5.firebaseapp.com',
	databaseURL: 'https://crown-db-8bcd5.firebaseio.com',
	projectId: 'crown-db-8bcd5',
	storageBucket: 'crown-db-8bcd5.appspot.com',
	messagingSenderId: '715654508393',
	appId: '1:715654508393:web:ee28775040ec24e148d7f8',
	measurementId: 'G-FSNWN474LV',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
