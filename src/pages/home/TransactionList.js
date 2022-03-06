import styled from 'styled-components';

export const TransactionList = ({ transactions }) => {
  return (
    <StyledTransactionList>
      {transactions.map((transaction) => {
        <li key={transaction.id}>
          <h1>dsa</h1>
          <p className='name'>{transaction.name}</p>
          <p className='amount'>{transaction.amount}</p>
        </li>;
      })}
    </StyledTransactionList>
  );
};

const StyledTransactionList = styled.div`
  li {
    color: green;
  }
`;
