import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage';
import SingUp from './components/SignUpPage';
import UserContext from './contexts/UserContext';
import Wallet from './components/Wallet';
import NewRecord from './components/Records/NewRecord';
import UpdateRecord from './components/Records/UpdateRecord';

function App() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [records, setRecords] = useState("");

    return (
        <UserContext.Provider value={{token, setToken, name, setName, records, setRecords}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/sign-up" element={<SingUp />}/>
                    <Route path="/wallet" element={<Wallet />}/>
                    <Route path="/newrecord" element={<NewRecord />}/>
                    <Route path="/updaterecord" element={<UpdateRecord />}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;