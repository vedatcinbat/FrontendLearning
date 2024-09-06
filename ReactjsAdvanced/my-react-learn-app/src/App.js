import './App.css';
import Welcome from './components/Welcome';
import UserStatus from './components/UserStatus';
import Notification from './components/Notification';
import UserProfile from './components/UserProfile';
import ItemList from './components/ItemList';
import UserList from './components/UserList';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import MultiInputForm from './components/MultiInputForm';
import FormWithObjectState from './components/FormWithObjectState';
import SubmitForm from './components/SubmitForm';
import Counter from './components/Counter';
import Timer from './components/Timer';
import WindowResizer from './components/WindowResizer';
import FetchData from './components/FetchData';

function App() {
  return (
    <>
      {/* 
        <div>Hello Reactjs</div>
        <Welcome isLoggedIn={true} />
        <Welcome isLoggedIn={false} />
        <UserStatus isAdmin={false} />
        <Notification isLoggedIn={true} />
        <UserProfile name="John Doe" isAdmin={true} notifications={['message1', 'message2']} />
        <UserProfile name="Jane Doe" isAdmin={false} notifications={[]} />
        <ItemList />
        <UserList />
        <ControlledForm />
        <UncontrolledForm />
        <MultiInputForm />
        <FormWithObjectState />
        <SubmitForm />        
      */}
      <Counter />
      <Timer />
      <WindowResizer />
      <FetchData />
    </>
  );
}

export default App;
