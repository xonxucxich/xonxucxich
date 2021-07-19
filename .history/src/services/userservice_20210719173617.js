import db from "../models/index";
import bcrypt from 'bcryptjs'

const db = require("../models");


let handleuserlogin=(email,password)=> {
    return new Promise(async(resolve,reject)=>{
       try{
           let userData = {};

           let isExist = await checkuseremail(email);
           if (isExist){
               //user already exist
               //compare password
            let user = await db.user.findOne({
                where: {email : email}
            });
            if(user){
             //compare password 
             let check = await bcrypt.compareSync(password,user.password); // false
            if(check){
                userData.errCode=0;
                userData.errMessage='ok',
                userData.user=user;
             }else{
                userData.errCode =3;
                userData.errMessage='wrong password';
              }
            }else{
                userData.errCode =2;
                userData.errMessage='user is not found'
            }
              

              resolve()
           }else{
               //return error
               userData.errCode=1
               userData.errMessage='your email isnt exist '
               resolve(userData)
           }
           
       } catch(e){
           reject(e)
       }
    }) 
}


module.exports ={
    handleuserlogin : handleuserlogin
}