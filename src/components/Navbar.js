import { Link } from 'react-router-dom';

// styles
import s from './Navbar.module.scss';

function Navbar() {
  return (
    <nav className={s.navbar}>
      <ul>
        <li className={s.title}>myMoney</li>
        <div className={s.wrapper}>
          <li>
            <Link to='login'>Login</Link>
          </li>
          <li>
            <Link to='signup'>Signup</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
