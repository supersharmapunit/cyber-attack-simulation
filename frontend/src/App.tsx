import './App.css'
import axios from 'axios'
import { Turnstile } from '@marsidev/react-turnstile';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState<string>('');

  return (
    <>
      <input type="text" placeholder='OTP' />
      <input type="text" placeholder='RESET Password'/>
      <Turnstile siteKey="YOUR_TURNSTILE_SITE_KEY" onSuccess={(token) => { setToken(token) }} />
      <button type="submit" onClick={() => {
        axios.post("localhost:3000/reset-password", {
          email: "punit@gmail.com",
          otp: "123456",
          newPassword: "123123123",
          token: ""
        });
      }} ></button>
    </>
  )
}

export default App
