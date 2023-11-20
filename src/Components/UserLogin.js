import React from 'react'
import { useState } from 'react';

const UserLogin = () => {
  const [num, setnum] = useState(8);
  
  function funk(e) {
    e.preventDefault();
  }
  function pass() {
    if (document.querySelector("#pass").value.length <= 8) {
      setnum(num - 1);
      if (document.querySelector("#pass").value.length==8) {
        document.querySelector(".num").style.display = "none";
      }
    }
  }

  function email() {
    if (document.querySelector("#email").value.includes(".ru")) {
      document.querySelector(".ru").style.display = "none";
    }
  }

  return (
    <div>
      <form onClick={(e) => funk(e)} action="/action_page.php">
        <label htmlFor="fname">Email</label>
        <input onKeyUp={email} type="email" id="email" placeholder="Your email.." />
        <p className='ru'>.ru daxil etmelisiniz</p>
        <label htmlFor="lname">Password</label>
        <input onKeyUp={pass} type="password" id="pass" placeholder="Your password.." />
        <p className='num'>{num} simvol elave edin</p>
        <button>Login</button>
      </form>
    </div>
  )
}

export default UserLogin