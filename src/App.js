import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage';
import SingUp from './components/SignUpPage';
import UserContext from './contexts/UserContext';
import Wallet from './components/Wallet';

function App() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");

    return (
        <UserContext.Provider value={{token, setToken, name, setName}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/sign-up" element={<SingUp />}/>
                    <Route path="/wallet" element={<Wallet />}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;