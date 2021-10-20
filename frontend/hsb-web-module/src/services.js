import axios from "axios"



const apiTokenAcces= ()=> {

axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=>console.log(res.data));
}



const apiTokenAccesId= ()=> {

    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=>console.log(res.data.userId));
    }

export default {apiTokenAcces,apiTokenAccesId} ;