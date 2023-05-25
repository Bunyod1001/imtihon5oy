import React from 'react'
import { Outlet } from 'react-router-dom';
import useToken from '../Hook/useToken'

export default function Publick() {
 let [token] = useToken();

 if (token) {
    return <Outlet/>;
 }

 return <Outlet/>
}