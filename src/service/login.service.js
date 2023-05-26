import axios from "axios";

export default  async function   register(username,email,password){

    return  await  axios.post('http://api_oh.udvc.ac.th/user/register',{
        name: username,
        email: email,
        password: password
    })

}