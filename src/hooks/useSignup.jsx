import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';

// Firebase Imports
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();


  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    
    try {
      //signup user - This create a usewr with an email and password but it does not allow us to pass the display name
      const res = await createUserWithEmailAndPassword(auth, email, password);


      if (!res) {
        throw new Error('Could not complete signup');
      }

      // We created the user first then we update the profile of that user and set the displayName property
      updateProfile(auth.currentUser, {
        displayName,
      });

      // Dispatch Login Action
      dispatch({
        type: 'LOGIN',
        payload: res.user
      })

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
      
    } catch (err) {
      if (!isCancelled) {
        setError(err.code.slice(5));
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
};
