import { Bottom, Container, Name, NewRecord, Records, Top, NoRecords, P } from "./style.js"
import { useMemo, useContext, useEffect } from 'react';
import UserContext from "../../contexts/UserContext";
import axios from 'axios';
import ShowRecords from "./Records.js"
import Balance from "./Balance.js"

let records = [
	{
		id: 1,
		name: "Cinema",
		value: 30.00,
        type: "exit",
        date: "25/01"
	},
	{
		id: 2,
		name: "Churrasco",
		value: 57.30,
        type: "exit",
        date: "30/01"
	},
    {
		id: 3,
		name: "Salário",
		value: 2758.00,
        type: "entry",
        date: "02/02"
	},
    {
		id: 4,
		name: "Ração gata",
		value: 68.00,
        type: "exit",
        date: "03/02"
	}
]


function GetRecords() {
    const { token } = useContext(UserContext);
    
    const config = useMemo(() => {
        const data = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        return data;
    }, [token]);
    
    function fetch() {
        const promisse = axios.get("http://localhost:5000/wallet", config);
        promisse.then(response => {
            console.log(response);
            return true
        });
        promisse.catch(response => {
            console.log(response);
            return false
        });
    };

    useEffect(fetch, [config]);
}

function Wallet() {
    const { name } = useContext(UserContext);
    // const { name, records } = useContext(UserContext);
    console.log(name);

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
                    </> : <NoRecords><P>Não há registros de entrada ou saída</P></NoRecords>}
                
            </Records>
            <Bottom>
                <NewRecord>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </NewRecord>
                <NewRecord>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </NewRecord>
            </Bottom>

        </Container>
    );
}

export default Wallet;