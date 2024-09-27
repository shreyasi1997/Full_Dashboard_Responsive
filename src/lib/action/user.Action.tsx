"use server"

import { createAdminClient, createSessionClient } from "./appwrite"
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
export const Singin  = async ()=>{
try{

}
catch(err){
console.log("error")
}
}
export const SingUp  = async (userData:SignUpParams)=>{
  const  {email,password,firstName,lastName}=userData
    try{
        const { account } = await createAdminClient();

       const newUserAccount= await account.create(ID.unique(), email, password, `${firstName}${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("my-custom-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        return parseStringify(newUserAccount)
    }
    catch(err){
    console.log("error")
    }
}
// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  