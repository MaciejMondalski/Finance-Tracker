import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
// pages & components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path='/'
              element={!user ? <Navigate to='/login' /> : <Home />}
            />
            <Route
              path='login'
              element={user ? <Navigate to='/' /> : <Login />}
            />
            <Route
              path='signup'
              element={user ? <Navigate to='/' /> : <Signup />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
