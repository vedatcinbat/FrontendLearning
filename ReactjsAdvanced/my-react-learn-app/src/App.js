import './App.css';

// Basics Components
import Welcome from './components/Basics/Welcome';
import UserStatus from './components/Basics/UserStatus';
import Notification from './components/Basics/Notification';
import UserProfile from './components/Basics/UserProfile';
import ItemList from './components/Basics/ItemList';
import UserList from './components/Basics/UserList';
import ControlledForm from './components/Basics/ControlledForm';
import UncontrolledForm from './components/Basics/UncontrolledForm';
import MultiInputForm from './components/Basics/MultiInputForm';
import FormWithObjectState from './components/Basics/FormWithObjectState';
import SubmitForm from './components/Basics/SubmitForm';
import Counter from './components/Basics/Counter';
import Timer from './components/Basics/Timer';
import WindowResizer from './components/Basics/WindowResizer';
import FetchData from './components/Basics/FetchData';

// Intermediate Components
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Intermediate/Home';
import About from './components/Intermediate/About';
import Navbar from './components/Intermediate/Navbar';
import Dashborad from './components/Intermediate/Dashboard';
import Profile from './components/Intermediate/Profile';
import Settings from './components/Intermediate/Settings';

function App() {

  {/* Basics Components
      return (
      <>
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
          <Counter />
          <Timer />
          <WindowResizer />
          <FetchData />
        </>
    );
    */}

  {/* Intermediate Components */ }
  {/* return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    )*/}

    return (
      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashborad />}>
            {/* Nested Routes */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App;
