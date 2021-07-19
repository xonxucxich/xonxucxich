import userservice from "../services/userservice";
let handlelogin =(req,res)=> {
    let email = req.body.email;
    let password = req.body.password;
  
    if(!email || !password ) {
        return res.status(500).json({
            errCode:1,
            message: 'missing input parameter!'
        })
        

    }
  let userData = await userservice.handleuserlogin(email,password);
    //check email exist
    //compare password 
    // return userinfo
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage
       
    }) 
}

module.exports ={
    handlelogin: handlelogin
}