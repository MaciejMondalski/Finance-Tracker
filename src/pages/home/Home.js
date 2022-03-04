import styled from 'styled-components';
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

// components
import { TransactionForm } from './TransactionForm';

function Home() {
  const { user } = useAuthContext();

  return (
    <StyledHome>
      <div className='content'>transaction list</div>
      <div className='sidebar'>
        <TransactionForm uid={user.uid} />
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  max-width: 90%;
  padding: 15px;
  background-color: red;
  margin: 60px auto;

  .content {
    padding-left: 20px;
  }

  .sidebar {
    padding-right: 20px;
    min-width: 200px;
  }
`;

export default Home;
