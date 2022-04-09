import logo from './logo.svg';

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './App.css';
import { useState } from 'react';


const auth = getAuth(app)


function App() {

  const [email, setEmail]=useState('');
  const[pass, setPass]=useState('');

  const handleEmail= event =>{
    setEmail(event.target.value)
  }


  const handlePass=event=>{
    setPass(event.target.value)
  }

  const handleSubmit=event=>{
    createUserWithEmailAndPassword(auth, email, pass)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>{
      console.error(error);
    })
    event.preventDefault();
  }
  return (
    <div>
      <div className="registration w-50 mx-auto mt-5">
        <h2 className='text-primary'>Please register!</h2>
      <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePass} type="password" placeholder="Password" />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>     

      </div>

    </div>
  );
}

export default App;
