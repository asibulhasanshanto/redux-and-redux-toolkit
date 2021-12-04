import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import Profile from './components/UserProfile';



function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isAuth ? <Profile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
