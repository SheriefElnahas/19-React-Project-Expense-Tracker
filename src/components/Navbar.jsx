import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  
  return (
    <nav className={styles.Navbar}>
      <div className={styles['Navbar-container']}>
        <h2 className={styles['Navbar-heading']}>Expensify</h2>
      <div>
        <ul className={styles['Navbar-list']}>
        {!user && (
              <>
                <li className={styles['Navbar-item']}>
                  <Link className={styles['Navbar-link']} to="/login">
                    Login
                  </Link>
                </li>
                <li className={styles['Navbar-item']}>
                  <Link className={styles['Navbar-link']} to="/signup">
                    Signup
                  </Link>

                </li>
              </>
            )}
            {user && (
              <>
                <li>Hello, {user.displayName}</li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            )}
        </ul>
        
      </div>
      </div>
    </nav>
  )
}

export default Navbar