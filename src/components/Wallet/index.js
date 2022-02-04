import { Bottom, Container, NewRecord, Records, Top, NoRecords, P } from "./style.js"
import { useMemo, useContext, useEffect, useState } from 'react';
import UserContext from "../../contexts/UserContext";
import axios from 'axios';
import ShowRecords from "./Records.js"
import Balance from "./Balance.js"
import { Link } from "react-router-dom";

function Wallet() {
    const { name, setName, token, records, setRecords } = useContext(UserContext);

    useEffect(() => {
        if (localStorage.length > 0) {
            const serializedUser = localStorage.getItem("user");
            const user = JSON.parse(serializedUser);
            setName(user.name);
        }
    },[setName])


    function GetRecords() {
        const [ test, setTest ] = useState("");
          
        const config = useMemo(() => {
            const data = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            return data;
        }, []);
        
        function fetch() {
            const promisse = axios.get("http://localhost:5000/records", config);
            promisse.then(response => {
                if (response.data.length > 0) {
                    setRecords(response.data.reverse())
                    setTest(true)
                }
            });
            promisse.catch(response => {
                console.log(response);
                setTest(false)
            });
        };
    
        useEffect(fetch, [config]);
    
        return test
    }

    return (
        <Container>
            <Top>
                <p>Olá, {name}</p>
                <Link to="/">
                    <ion-icon name="log-out-outline"></ion-icon>
                </Link>
            </Top>
            <Records>
                {GetRecords() ?                     
                    <>
                        <ShowRecords records={records} />
                        <Balance records={records}/>
                    </> : 
                        <NoRecords><P>Não há registros de entrada ou saída</P></NoRecords>
                }
            </Records>
            <Bottom>
                <Link to="/entry">
                    <NewRecord>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova entrada</p>
                    </NewRecord>
                </Link>
                <Link to="/exit">
                    <NewRecord>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova saída</p>
                    </NewRecord>
                </Link>
            </Bottom>

        </Container>
    );
}

export default Wallet;