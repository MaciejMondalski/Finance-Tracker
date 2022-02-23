import styled from 'styled-components';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(displayName, email, password);
  };

  return (
    <StyledSignup sc onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <label>
        <span>name:</span>
        <input
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
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
      {!isPending && <button className='btn'>Sign up</button>}
      {isPending && (
        <button className='btn' disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </StyledSignup>
  );
}

const StyledSignup = styled.form`
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

export default Signup;
