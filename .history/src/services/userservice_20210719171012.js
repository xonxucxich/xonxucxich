const db = require("../models");

let handleuserlogin=(email,password)=> {
    return new Promise(async(resolve,reject)=>{
       try{
           let userData = {};

           let isExist = await checkuseremail(email);
           if (isExist){
               //user already exist
               //compare password
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
let checkuseremail = (email)=>{
    return new Promise(async (resolve,rejext) =>{
        try{
            let user = await db.User.findOne({
               where: {email : userEmail}
            })
            if(user){
                resolve(true)
            }else{
                resolve(false)
            }
        }catch(e){
            reject(e);
        }
    }) 
}

module.exports ={
    handleuserlogin : handleuserlogin
}