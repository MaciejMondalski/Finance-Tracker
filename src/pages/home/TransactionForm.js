import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

export const TransactionForm = ({ uid }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addDocument, state } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid, name, amount });
  };

  // reset the form fields
  useEffect(() => {
    if (state.success) {
      setName('');
      setAmount('');
    }
  }, [state.success]);

  return (
    <StyledForm>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            type='text'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type='number'
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  font-size: 0.9em;

  form {
    padding: 20px;
    background: #2c6eac;
    border-radius: 8px;
  }

  input {
    display: block;
    width: 100%;
    padding: 6px;
    margin-top: 8px;
    box-sizing: border-box;
    border: 0;
    border-radius: 4px;
    color: #555;
    font-size: 1em;
  }

  label {
    margin: 0 auto 20px;
    display: block;
    color: #fff;
  }

  button {
    color: #fff;
    border: 2px solid #fff;
    padding: 6px 12px;
    background-color: transparent;
    font-size: 1em;
    border-radius: 4px;
    cursor: pointer;
    display: block;
    width: 100%;
  }

  h3 {
    color: #2c6eac;
    margin-bottom: 14px;
    text-align: center;
  }

  aside {
    margin-top: 40px;
    color: #555;
    li {
      margin: 10px;
    }
  }
`;
