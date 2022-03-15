import styled from 'styled-components';
import { useFirestore } from '../../hooks/useFirestore';

export const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestore('transactions');

  return (
    <StyledTransactionList>
      <ul className='transactions'>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className='name'>{transaction.name}</p>
            <p className='amount'>${transaction.amount}</p>
            <button onClick={() => deleteDocument(transaction.id)}>X</button>
          </li>
        ))}
      </ul>
    </StyledTransactionList>
  );
};

const StyledTransactionList = styled.div`
  width: 90%;
  li {
    padding: 20px;
    margin: 30px auto;
    box-shadow: 4px 4px 5px rgba(50, 50, 50, 0.1);
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-left: 4px solid #2c6eac;
    transition-duration: 0.2s;
    max-width: 600px;
    background: rgba(245, 247, 248, 1);
    border-radius: 4px;

    &:hover {
      box-shadow: 5px 5px 6px 4px rgba(50, 50, 50, 0.08);
      transform: scale(1.01);
    }
  }

  .name {
    color: #777;
    font-size: 1.2em;
  }

  .amount {
    margin-left: auto;
    margin-right: 20px;
    color: #777;
    font-weight: bold;
    font-size: 1.4em;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    background: #ddd;
    color: #777;
    border: none;
    padding: 12px 8px;
    text-align: center;
    line-height: 0;
    font-size: 0.9em;
    cursor: pointer;
  }

  @media only screen and (max-width: 400px) {
    li {
      padding: 16px;
      margin: 22px auto;
      font-size: 0.8em;
    }
  }
`;
