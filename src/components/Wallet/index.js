import { Bottom, Container, NewRecord, Records, Top } from "./style.js"
import { useMemo, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from "../../contexts/UserContext";

let array = [
	{
		id: 1,
		name: "Cinema",
		value: 30.00,
        type: "exit",
        date: "25/01/2022"
	},
	{
		id: 2,
		name: "Churrasco",
		value: 57.30,
        type: "exit",
        date: "30/01/2022"
	},
    {
		id: 3,
		name: "Salário",
		value: 2758.00,
        type: "entry",
        date: "02/02/2022"
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
        // promisse.then(response => setHabits(response.data));
        promisse.catch(response => {
            console.log(response);
            return false
        });
        // promisse.catch(response => console.log(response))
    };

    useEffect(fetch, [config]);
}

function Wallet() {
    return (
        <Container>
            <Top>
                <p>Olá, Fulano</p>
                <ion-icon name="log-out-outline"></ion-icon>
            </Top>
            <Records>
                {GetRecords() ? <p>Vai aparece coisos aqui</p> : <p>Não há registros de entrada ou saída</p>}

                {/* {array.map(arr => ( 
                    <>
                        <span>{arr.date}</span>{arr.name}<span></span><span>{arr.value}</span>
                    </>
                )) } */}
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