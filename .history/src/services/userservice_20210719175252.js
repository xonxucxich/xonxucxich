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
                attributes:['email','roleID','password']
                where: {email : email},
                raw: true
            });
            if(user){
             //compare password 
             let check = await bcrypt.compareSync(password,user.password);
            if(check){
                userData.errCode=0;
                userData.errMessage='ok';

                delete user.password;
                userData.user=user;
             }else{
                userData.errCode =3;
                userData.errMessage='wrong password';
              }
            }else{
                userData.errCode =2;
                userData.errMessage='user is not found'
            }
              
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