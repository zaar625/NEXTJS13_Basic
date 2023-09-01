import { useState, useRef } from 'react';
import classes from './auth-form.module.css';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router';

async function createUser(email, password) {
  const response = await fetch('api/auth/signup',{
    method:'POST',
    body:JSON.stringify({email, password}),
    headers:{
      'Content-Type' : 'application/json'
    }
  });

  const data = await response.json();
  console.log(data)

  if(!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data;
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event){
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordRef.current.value;

    //optional: Add validation

    if(isLogin){
      const result = await signIn('credentials', {
        redirect:false,
        email:enteredEmail,
        password:enteredPassword
      })
      console.log(result)

      if(!result.error){
        //set some auth
        router.replace('/profile')
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result)
      } catch (error){
        console.log(error)
      }
      

    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
