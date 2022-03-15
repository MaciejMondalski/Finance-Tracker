import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <StyledStickyNavbar>
      <div className='ghost-nav'></div>
      <div className='sticky-wrapper'>
        <ul>
          <li className='title'>
            <Link to='/'>Txn Tracker</Link>
          </li>
          <div className='wrapper'>
            {!user && (
              <>
                <li>
                  <Link to='login'>Login</Link>
                </li>
                <li>
                  <Link to='signup'>Sign up</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>hello, {user.displayName}</li>

                <li>
                  <button className='btn' onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </StyledStickyNavbar>
  );
}

const StyledStickyNavbar = styled.nav`
  .ghost-nav {
    height: 3.6em;
  }
  .sticky-wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    background: #d1e9ffff;
    z-index: 1;
    padding: 15px 10px;
    box-sizing: border-box;
    height: 3.6em;
    display: flex;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 85%;

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
    }

    .title a {
      letter-spacing: 0em;
      font-size: 1.6em;
      font-family: 'Sora', sans-serif;
    }
  }

  @media only screen and (max-width: 800px) {
    ul {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    .ghost-nav {
      height: 3em;
    }

    .sticky-wrapper {
      height: 3em;

      width: 100%;
      background: #d1e9ffff;

      ul {
        .title a {
          font-size: 1.4em;
        }

        li {
          margin: 0 12px;
        }

        .wrapper {
          font-size: 0.9em;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .sticky-wrapper {
      ul {
        .title a {
          font-size: 1.1em;
        }

        li {
          margin: 0 8px;
        }

        .wrapper {
          font-size: 0.8em;
        }
      }
    }
  }
`;

export default Navbar;
