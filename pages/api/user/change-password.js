// api/user/change-password
import { useSession, getSession } from "next-auth/react"
import {verifyPassword, hashPassword} from '../../../lib/auth'
import {connectToDatabase} from '../../../lib/db'

async function handler(req, res){
    if(req.method !== "PATCH"){
        return ;
    }

    const session = await getSession({req:req});

    if(!session) {
        res.status(401).json({message:'Not authenticated!'});
        return;
    }

    const userEmail = session.user.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    const client = await connectToDatabase();

    const usersCollection = client.db().collection('users');

    const user = usersCollection.findOne({email:userEmail});

    if(!user){
        res.status(404).json({message:'User not Found.'});
        client.close();
        return;
    }

    const currentPassword = user.password;

    const passwordAreEqual = verifyPassword(oldPassword, currentPassword);

    if(!passwordAreEqual){
        res.status(403).json({message:'Invalid password'});
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(newPassword)

   const result =  await usersCollection.updateOne({email:userEmail}, {$set:{password:newPassword}});

   client.close();
   
   res.status(200).json({mewssage:'Password update!'});
}

export default handler