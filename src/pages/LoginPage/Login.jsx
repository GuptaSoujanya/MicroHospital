import React, { useEffect } from 'react';
import './loginpage.css';
import Navbar from '../Navbar';

function Login() {
  useEffect(() => {
    const wrapper = document.querySelector('.loginWrapper');
    const signupHeader = document.querySelector('.loginSignup .loginForm__header');
    const loginHeader = document.querySelector('.loginLogin .loginForm__header');

    if (loginHeader && signupHeader && wrapper) {
      loginHeader.addEventListener('click', () => {
        wrapper.classList.add('loginActive');
      });
      signupHeader.addEventListener('click', () => {
        wrapper.classList.remove('loginActive');
      });
    }

    // Cleanup function to remove event listeners
    return () => {
      if (loginHeader && signupHeader) {
        loginHeader.removeEventListener('click', () => {
          wrapper.classList.add('loginActive');
        });
        signupHeader.removeEventListener('click', () => {
          wrapper.classList.remove('loginActive');
        });
      }
    };
  }, []);

  return (
    <>
     <Navbar />
    <div className='loginBody'>
      <section className="loginWrapper loginActive">
        <div className="loginForm loginSignup">
          <header className="loginForm__header">Signup</header>
          <form action="#">
            <input type="text" className="loginForm__input" placeholder="Full name" required />
            <input type="text" className="loginForm__input" placeholder="Email address" required />
            <input type="password" className="loginForm__input" placeholder="Password" required />
            <div className="loginForm__checkbox">
              <input type="checkbox" id="loginSignupCheck" />
              <label htmlFor="loginSignupCheck">I accept all terms & conditions</label>
            </div>
            <input type="submit" className="loginForm__submit" value="Signup" />
          </form>
        </div>
        <div className="loginForm loginLogin">
          <header className="loginForm__header">Login</header>
          <form action="#">
            <input type="text" className="loginForm__input" placeholder="Email address" required />
            <input type="password" className="loginForm__input" placeholder="Password" required />
            <a href="#" className="loginForm__link">Forgot password?</a>
            <input type="submit" className="loginForm__submit" value="Login" />
          </form>
        </div>
      </section>
    </div>
    </>
  );
}

export default Login;
