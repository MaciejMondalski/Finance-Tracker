import styled from 'styled-components';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
      {!isPending && <button className='btn'>Login</button>}
      {isPending && <button className='btn'>loading</button>}
      {error && <p>{error}</p>}
    </StyledLogin>
  );
};

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
