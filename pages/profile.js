import UserProfile from '../components/profile/user-profile';
import { useSession, getSession } from "next-auth/react"

function ProfilePage() {

  return <UserProfile />;
}

export async function getServerSideProps(context){
  const session = await getSession({req:context.req});

  if(!session) {
    return {
      // notFound:
      redirect:{
        destination:'/auth',
        permanent:false
      }
    }
  }

  return {
    props:{session},
    
  }
}

export default ProfilePage;
