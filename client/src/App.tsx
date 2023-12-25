import React from 'react';
import {useUsersQuery} from "./gql/generated/schema";
import { Route, Routes, useSearchParams, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import NavBar from "./components/Navbar";
import "./App.css";
function App() {
    const { data, error } = useUsersQuery();
    const location = useLocation();  // Utilisez useLocation pour obtenir la valeur de location

    console.log(data, error)


    return (
        <>
        <NavBar children={undefined} customClass={undefined}/>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
        </Routes>
        </>
    );
}


export default App;
