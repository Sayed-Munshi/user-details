import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import UserInformation from './component/UserInformation/UserInformation';
import data from './data/data.json';
import Cart from './component/Cart/Cart';


function App() {

  // const [userInf, setUserInf] = useState([]);
  const [userData, setUserData] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() =>{
    setUserData(data);
    console.log(data);
  }, [])
  

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => {
  //     setUserInf(data);
  //     console.log(data);
  //     //  const names = data.map(userInformation =>userInformation.email)
  //     // console.log(names);
  //   })
      
  // }, [])

  const handleAddUser = (userInformation) => {
    const newCart = [...cart, userInformation];
    setCart(newCart);
  }

  return (
    <div className="App">
      <h2>with picture Details: {userData.length}</h2>
      <Cart cart={cart}></Cart>
      <h4>User Added: {cart.length}</h4>
      
      {
          userData.map(userInformation => <UserInformation userInformation={userInformation} handleAddUser={handleAddUser}></UserInformation>)
        }
{/* 
      <h1>User name: {userInf.length}</h1>
      
        {
          userInf.map(userInformation => <UserInformation userInformation={userInformation}></UserInformation>)
        } */}

      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
