import { useState } from "react";
import axios from "../../les/node_modules/axios";


const App = () => {
  const  [login, setLogin] = useState('')
  const  [password, setPassword] = useState('')
  const  [user, setUser] = useState('')

  const onSignIn = () => {
    axios.post("http://localhost:3001/auth/sign-in", {
      phone: login,
      password: password,
    })
    .then((response) => {
      setUser(response.data.email)
    })
    
  }

  const onLoginChange = (event) => {
    setLogin(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
      <input type='text' placeholder='Login' onChange={onLoginChange}/> 
      <input type='text' placeholder='Password' onChange={onPasswordChange}/> 
      <button onClick={onSignIn}>Sign In</button>
      <div>{user}</div>
    </>
  )
}


export default App;