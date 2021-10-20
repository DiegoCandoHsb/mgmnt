import axios from "axios"



function apiTokenAcces () {

axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=>console.log(res.data));
}



async function apiTokenAccesId() {

    await axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=>console.log(res.data.userId));
    }






    
 const api = {apiTokenAcces,apiTokenAccesId};
export default api ;