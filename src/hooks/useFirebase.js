import initializeFirebase from './../Pages/Login/Firebase/firebase.init';
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged , GoogleAuthProvider , signInWithPopup,updateProfile,signOut } from "firebase/auth";
initializeFirebase();
const useFirebase=()=>{
    const[user,setUser] =useState({});
     const [isLoading,setIsLoading]= useState(true)
     const [authError,setAuthError]= useState('')
     
 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    
    
    const registerUser=(email,password,history,name)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
   setAuthError('');
   const newUser ={email, displayName:name, password:password};
   setUser(newUser);
   
   updateProfile(auth.currentUser, {
  displayName: name
}).then(() => {
  
}).catch((error) => {
  // An error occurred
  // ...
});
   
   
   history.replace('/');
  })
  .catch((error) => {
  
   setAuthError(error.message);
    // ..
  })
  .finally(() => setIsLoading(false))
  ;
    }
    
    const loginUser=(email,password, location,history) => {
         setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const destination = location?.state?.from || '/'
      history.replace(destination)
       setAuthError('');
  })
  .catch((error) => {

     setAuthError(error.message);
  })
  .finally(() => setIsLoading(false))
  ;

    }
    
   const signInWithGoogle=(location,history)=>{
        setIsLoading(true)
       signInWithPopup(auth, googleProvider)
  .then((result) => {
  const user =result.user;
   setAuthError('');
  }).catch((error) => {
       setAuthError(error.message);
  })
  .finally(() => setIsLoading(false))
  ;

        
    }
    
    
    useEffect(() => {
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
  if (user) {
      
    setUser(user)
    
  } else {
      setUser({})
  }
  setIsLoading(false)
}); 
     return ()=> unsubscribe
    },[])
    
    
    const logOut=()=>{
        setIsLoading(true)
        const auth = getAuth();
signOut(auth).then(() => {
 
}).catch((error) => {

})
   .finally(() => setIsLoading(false));
    }
    return{
        user,
        isLoading,
        authError,
        registerUser,
         loginUser,
        signInWithGoogle,
             logOut
       
    }
}

export default useFirebase;