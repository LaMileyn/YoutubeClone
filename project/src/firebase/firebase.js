import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAdeLdCEdJOVvV1ZYIdtieZsyvfzmYlBRM",
    authDomain: "clone-d9c6a.firebaseapp.com",
    projectId: "clone-d9c6a",
    storageBucket: "clone-d9c6a.appspot.com",
    messagingSenderId: "1093662545664",
    appId: "1:1093662545664:web:b05616316d693ec590c5e5"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()