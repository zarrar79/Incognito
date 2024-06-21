
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectMongoDB } from "@/lib/mongodb";
import User from '@/models/user'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLENT_ID,
      clientSecret: process.env.GOOGLE_CLENT_SECRET,
    }),
  ],
  callbacks:{
    async signIn({user, account}){
      console.log("User", user)
      console.log("Account", account)
      const {email,name} = user;
      try{
        await connectMongoDB();

        const userExist = await User.findOne({email});
        if(!userExist){
          const res =  await fetch("http://localhost:3000/api/user",{
            method: "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
           })
           if(res.ok){
            return user;
           }
        }
        else{
          console.log("User exists");
        }
        
      }
      catch(error){
       console.log(error);
      }
      return user;
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };