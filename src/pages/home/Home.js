import styled from 'styled-components';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

// components
import { TransactionForm } from './TransactionForm';
import { TransactionList } from './TransactionList';

function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions', [
    'uid',
    '==',
    user.uid,
  ]);
  return (
    <StyledHome>
      <div className='content'>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
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
