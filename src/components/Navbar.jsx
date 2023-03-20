import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

function Navbar() {
  console.log(styles['Navbar-container']);
  return (
    <nav className={styles.Navbar}>
      <div className={styles['Navbar-container']}>
        <h2 className={styles['Navbar-heading']}>Expensify</h2>
      <div>
        <ul className={styles['Navbar-list']}>
          <li className="Navbar-item"><Link to="login" className={styles['Navbar-link']}>Signup</Link></li>
          <li className="Navbar-item"><Link to="signup" className={styles['Navbar-link']}>Login</Link></li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar