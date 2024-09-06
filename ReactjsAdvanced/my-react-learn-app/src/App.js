import './App.css';
import Welcome from './components/Welcome';
import UserStatus from './components/UserStatus';
import Notification from './components/Notification';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <div>Hello Reactjs</div>
      <Welcome isLoggedIn={true} />
      <Welcome isLoggedIn={false} />
      <UserStatus isAdmin={false} />
      <Notification isLoggedIn={true} />
      <UserProfile name="John Doe" isAdmin={true} notifications={['message1', 'message2']} />
      <UserProfile name="Jane Doe" isAdmin={false} notifications={[]} />
    </>
  );
}

export default App;
