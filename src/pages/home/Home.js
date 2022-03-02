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
  grid-template-columns: 2fr 1fr;
  width: 90%;
  max-width: 960px;

  margin: 60px auto;

  .content {
    padding-right: 30px;
  }

  .sidebar {
    padding-left: 30px;
  }
`;

export default Home;
