import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <StyledNavbar sc>
      <ul>
        <li className='title'>
          <Link to='/'>Finance Tracker</Link>
        </li>
        <div className='wrapper'>
          <li>
            <Link to='login'>Login</Link>
          </li>
          <li>
            <Link to='signup'>Sign up</Link>
          </li>
        </div>
      </ul>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: 100%;
  background: #effaf0;
  padding: 15px 10px;
  box-sizing: border-box;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 80%;

    .wrapper {
      display: flex;
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
