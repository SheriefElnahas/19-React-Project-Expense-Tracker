import React, { useEffect, useState } from 'react';

// firebase imports
import { auth } from '../firebase/firebase.config'
import { signOut } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export function useLogout() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // sign the user out
    try {
      await signOut(auth);

      // dispatch logout action
      dispatch({
        type: 'LOGOUT',
      });

      // update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err);
        setError(err.code.slice(5));
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
}
