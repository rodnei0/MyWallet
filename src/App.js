import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage';
import SingUp from './components/SignUpPage';
import UserContext from './contexts/UserContext';
import Wallet from './components/Wallet';
import NewEntry from './components/Records/NewEntry';
import NewExit from './components/Records/NewExit';

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
                    <Route path="/entry" element={<NewEntry />}/>
                    <Route path="/exit" element={<NewExit />}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;