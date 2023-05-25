import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useToken from '../Hook/useToken';
import  './login.css'
import logo from "../Media/log.png"
import { Container } from '@mui/material';

export default function Login(){
  let navigate = useNavigate()
      let [token, setToken] = useToken();
  
      useEffect(() => {
          if (token) {
              navigate("/admin");
          }
      });
      const HandleSubmit = (evt) => {
          evt.preventDefault();
          let { username, password } = evt.target.elements;
  
          axios
          .post("https://reqres.in/api/login", {
              email:username.value,
              password:password.value,
          })
          .then((json) => {
              if(json.data.token) {
              setToken(json.data.token);
              navigate("/admin");
              
          }
      });
  };
  return (
    <>
    <Container>
     <section className='login'>
            <div className="container">
                <div className="login__wrapper">
                    <h1 className='login__title'>Log in</h1>
                    <form className='login__form' action="" onSubmit={HandleSubmit}>
                        <input className='login__input'  name='username' type="text" placeholder='Enter your username' />
                        <input className='login__input'  name='password' type="password" placeholder='Enter your password' />
                        <button className='login__btn' type='Submit'>Send</button>
                    </form>
                </div>
            </div>
    <div className='img'>
      <img style={{width:"500px"}} src={logo} alt="s" />
    </div>
        </section>
        </Container>
    </>
)
}




