import styled from 'styled-components';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <StyledLogin sc onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        <span>email:</span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className='btn'>Login</button>
    </StyledLogin>
  );
}

const StyledLogin = styled.form`
  max-width: 360px;
  margin: 60px auto;
  padding: 20px;

  label {
    display: block;
    margin: 30px auto;
  }

  span {
    display: block;
    margin-bottom: 6px;
  }

  input {
    padding: 8px 6px;
    font-size: 1em;
    color: #777;
    width: 100%;
  }
`;
export default Login;
