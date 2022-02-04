import { Bottom, Container, NewRecord, Records, Top, NoRecords, P } from "./style.js"
import { useMemo, useContext, useEffect, useState } from 'react';
import UserContext from "../../contexts/UserContext";
import axios from 'axios';
import ShowRecords from "./Records.js"
import Balance from "./Balance.js"
import { Link } from "react-router-dom";

let records = [
	{
		id: 1,
		description: "Cinema",
		value: 30.00,
        type: "exit",
        date: "25/01"
	},
	{
		id: 2,
		description: "Churrasco",
		value: 57.30,
        type: "exit",
        date: "30/01"
	},
    {
		id: 3,
		description: "Salário",
		value: 2758.00,
        type: "entry",
        date: "02/02"
	},
    {
		id: 4,
		description: "Ração gata",
		value: 68.00,
        type: "exit",
        date: "03/02"
	}
]



function GetRecords() {
    const { token } = useContext(UserContext);
    const [ test, setTest ] = useState("");
      
    const config = useMemo(() => {
        const data = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        return data;
    }, [token]);
    
    function fetch() {
        const promisse = axios.get("http://localhost:5000/records", config);
        promisse.then(response => {
            console.log(response);
            setTest(true)
        });
        promisse.catch(response => {
            console.log(response);
            setTest(false)
        });
    };

    useEffect(fetch, [config]);

    return test
}

function Wallet() {
    const { name, setName } = useContext(UserContext);

    if (localStorage.length > 0) {
        const serializedUser = localStorage.getItem("user");
        const user = JSON.parse(serializedUser);
        setName(user.name);
    }

    return (
        <Container>
            <Top>
                <p>Olá, {name}</p>
                <ion-icon name="log-out-outline"></ion-icon>
            </Top>
            <Records>
                {/* {GetRecords() ? 
                    <>
                        <ShowRecords records={records} />
                        <Balance records={records}/>
                    </>
                 :                     <>
                 <ShowRecords records={records} />
                 <Balance records={records}/>
             </>} */}
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