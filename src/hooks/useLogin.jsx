import { useEffect, useState } from 'react';

// firebase imports
import { auth } from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export function useLogin() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // sign the user in
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      // dispatch login action
      dispatch({
        type: 'LOGIN',
        payload: res.user,
      });

      // update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message.slice(9));
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, error, isPending };
}
