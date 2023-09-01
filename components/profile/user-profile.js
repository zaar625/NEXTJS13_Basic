import { useEffect } from 'react';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { useSession, getSession } from "next-auth/react"

function UserProfile() {
  // Redirect away if NOT auth
// const { data: session, status }  = useSession();

// useEffect(()=>{
//   async function getSess() {
//     const session = await getSession()

//     if(!session) {
//       window.location.href='/auth'
//     }
//   }

//   getSess();
// },[])

async function changePasswordHandler(passwordData) {
  const response = await fetch('/api/user/change-password',{
    method:"PATCH",
    body:JSON.stringify(passwordData),
    headers:{
      'Content-Type' :'application/json'
    }
  });

  const data = await response.json();

  console.log(data)
}


  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm  onChangePassword={changePasswordHandler}/>
    </section>
  );
}

export default UserProfile;
