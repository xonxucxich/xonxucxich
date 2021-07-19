const db = require("../models");

let handleuserlogin=(email,password)=> {

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