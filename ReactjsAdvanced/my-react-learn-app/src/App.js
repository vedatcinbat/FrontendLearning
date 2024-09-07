import './App.css';
import './styles.css'
import React, { useState } from 'react';
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
import Dashboard from './components/Intermediate/Dashboard';
import Profile from './components/Intermediate/Profile';
import Settings from './components/Intermediate/Settings';
import UserProvider from './providers/UserProvider';
import Login from './components/Intermediate/Login';
import FocusInput from './components/Intermediate/FocusInput';
import CounterRef from './components/Intermediate/CounterRef';
import ExpensiveCalculation from './components/Intermediate/ExpensiveCalculation';
import DataComponent from './components/Intermediate/DataComponent';
import GetUsersData from './components/Intermediate/GetUsersData';
import CounterReducer from './components/Advanced/CounterReducer';
import AccordionApp from './components/Advanced/CompoundComponents/AccordionApp';
import Modal from './components/Advanced/Modal';
import Dropdown from './components/Advanced/Dropdown';

function App() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(2);

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

  {/*
      return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />}/>
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    ); */}
  {/* 
    return (
    <>
      <FocusInput />
      <CounterRef />
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Counter</button>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <ExpensiveCalculation number={number} />
        <p>Counter: {count}</p>
      </div>
    </>
  )*/
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      {/* <DataComponent /> */}
      {/* <GetUsersData /> */}
      {/* <CounterReducer /> */}
      {/* <AccordionApp /> */}
      <div>
        <h1>React Advanced</h1>
        {/* <Modal>
            <h2>Modal Content</h2>
            <p>This is the modal content</p>
          </Modal>
          <Modal>
            <h2>Modal Content 2</h2>
            <p>This is the second modal content</p>
          </Modal> */}
        <div className="app">
          <h1>Click the button to open the modal</h1>
          <button onClick={() => setModalOpen(true)}>Open Modal</button>

          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <h2>This is a modal</h2>
            <p>Modals allow you to render content outside the main DOM hierarchy.</p>
          </Modal>

          <br />

          <h1>Dropdown Example</h1>
          <button onClick={() => setDropdownOpen(!isDropdownOpen)}>
            Toggle Dropdown
          </button>
          <Dropdown isOpen={isDropdownOpen} toggleDropdown={setDropdownOpen} />
        </div>
      </div>
    </>
  )


}

export default App;
