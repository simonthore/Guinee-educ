import React from 'react';
import {useUsersQuery} from "./gql/generated/schema";
import { Route, Routes, useSearchParams, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Contact from './screens/Contact';
import NavBar from "./components/Navbar";
import Login from './screens/Login';
import DonationPage from './screens/Donation';
import "./App.css";

function App() {
    const { data, error } = useUsersQuery();
    const location = useLocation();  // Utilisez useLocation pour obtenir la valeur de location

    console.log(data, error)


    return (
        <>
        <NavBar children={undefined} customClass={undefined}/>
        <Routes location={location} key={location.pathname}>
            <Route path ="/" element={<Home />} />
            <Route path ="Contact" element={<Contact />} />
            <Route path ="Login" element={<Login />} />
            <Route path="Donation" element={<DonationPage/>} />
        </Routes>
        </>
    );
}


export default App;
