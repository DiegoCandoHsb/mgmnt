import './root.css';
import NavBarInto from '../introduction/component/navBar/navBarInto'
import { useState } from 'react';


 

function SiginUp(props) {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  const submitValue = () => {
    const frmdetails = {
        'First Name' : username,
        'Last Name' : lastname,
        'Phone' : phoneNumber,
        'Email' : email,
        'Password' : password
    }
    console.log(frmdetails);
}







  if (props.state) {
    return <div>
                <h1 translate="yes">Sigin Up</h1>
                <label translate="yes">Names</label>
                <br/>
                <input type="text" placeholder="First Name" onChange={e => setUsername(e.target.value)} />
                <br/>
                <label translate="yes">Last Names</label>
                <br/>
                <input type="text" placeholder="Last Name" onChange={e => setLastname(e.target.value)} />
                <br/>
                <label translate="yes">Phone Number</label>
                <br/>
                <input type="text" placeholder="Phone" onChange={e => setPhoneNumber(e.target.value)} />
                <br/>
                <label translate="yes">Email</label>
                <br/>
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <br/>
                <label translate="yes">Password</label>
                <br/>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                
                <p><button className="button"  onClick={submitValue} translate="yes">Sigin Up</button></p>
          </div>
  }else{return null }
}




 function SiginIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const submitValue = () => {
    const frmdetails = {

        'Email' : email,
        'Password' : password
    }
    console.log(frmdetails);
}



  if (props.state ) {
    return <div>

                <h1 translate="yes">Welcome</h1>
                <br/>
                <label translate="yes">Email</label>
                <br/>
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <br/>
                <label translate="yes">Password</label>
                <br/>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                
                <p><button className="button" onClick={submitValue} translate="yes">SiginIn</button></p>

          </div>
  }else{return null}
}
 



 function NewPassword(props) {
  const [email, setEmail] = useState('');



  const submitValue = () => {
    const frmdetails = {

        'Email' : email
    }
    console.log(frmdetails);
}



  if (props.state ) {
    return <div>
                <h1 translate="yes">Recover password</h1>
                <label translate="yes">Please enter the email of your previously registered account</label>
                
                <label translate="yes">Email</label>
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />

                <p><button className="button" onClick={submitValue} translate="yes">Request</button></p>

            </div>
  }else{return null}
}

  
  







function Root() {
  const [show, setshow] = useState([true, false, false]);
 
  return (
      <div className="root">
        <NavBarInto/>
        <div className="container-body">
            <div className="content1">
              <SiginUp state={show[0]}/>
              <SiginIn state={show[1]}/>
              <NewPassword state={show[2]}/> 
            </div>
            <div className="content2">
            
              <button onClick={()=>{setshow([true, false, false])}} translate="yes">Sigin Up</button>
              <button onClick={()=>{setshow([false, true, false])}} translate="yes">SiginIn</button>
              <button onClick={()=>{setshow([false, false, true])}} translate="yes">Recover Password</button>

            </div>
        </div>
      </div>
      
  );
}



export default Root;
