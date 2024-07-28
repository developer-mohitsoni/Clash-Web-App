"use server"

import { REGISTER_URL } from "@/lib/apiEndPoints"
import axios from "axios"

export const registerAction = async(formData: FormData)=>{
    console.log("The form data is: ", formData);
    
    // try{
    //     await axios.post(REGISTER_URL,{
    //         name: formData.get("name"),
    //         email: formData.get("email"),
    //         password: formData.get("password"),
    //         confirm_password: formData.get("confirm_password"),
    //     })
    // }catch(error){

    // }
}