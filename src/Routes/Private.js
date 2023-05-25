import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
// import { tokenContext } from '../components/Context/contextToken';
import useToken from '../Hook/useToken';



export default function Private() {
    let navigate = useNavigate();
    let [token]= useToken()
  if (token == "QpwL5tke4Pnpja7X4"){
    return <Outlet/>
  }
  return navigate("/login");
}