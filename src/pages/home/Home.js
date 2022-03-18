import styled from 'styled-components';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

// components
import { TransactionForm } from './TransactionForm';
import { TransactionList } from './TransactionList';

function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions', null, [
    ('createdAt', 'desc'),
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
  grid-template-columns: 2fr 1fr;
  width: 80%;
  padding: 15px 0;
  margin: 20px auto;

  .content {
    padding-left: 20px;
  }

  .sidebar {
    padding-right: 20px;
    min-width: 200px;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;

    .content,
    .sidebar {
      display: flex;
      justify-content: center;
      padding: 0;

      div {
        width: 90%;
        max-width: 450px;
      }
    }
  }
`;

export default Home;
