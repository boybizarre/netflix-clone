import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDskagKMw3camvRSKIkc_FjVbTjzs2XQZU',
  authDomain: 'netflix-clone-3f145.firebaseapp.com',
  projectId: 'netflix-clone-3f145',
  storageBucket: 'netflix-clone-3f145.appspot.com',
  messagingSenderId: '998438791971',
  appId: '1:998438791971:web:6f80286a344139b105fa96',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
