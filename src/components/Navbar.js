import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLogout } from '../hooks/useLogout';

function Navbar() {
  const { logout } = useLogout();

  return (
    <StyledNavbar sc>
      <ul>
        <li className='title'>
          <Link to='/'>Lean Finance</Link>
        </li>
        <div className='wrapper'>
          <li>
            <Link to='login'>Login</Link>
          </li>
          <li>
            <Link to='signup'>Sign up</Link>
          </li>
          <li>
            <button className='btn' onClick={logout}>
              Logout
            </button>
          </li>
        </div>
      </ul>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: 100%;
  background: #d1e9ff;
  padding: 15px 10px;
  box-sizing: border-box;

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 80%;

    .wrapper {
      display: flex;
      align-items: center;
    }

    li {
      margin: 0 16px;
    }

    a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
    }
  }

  .title a {
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1.4em;
  }
`;

export default Navbar;
