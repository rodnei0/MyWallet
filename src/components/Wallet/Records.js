import { Div, Date, Name, Value } from "./style.js"
import axios from "axios";
import { useContext, useMemo } from "react";
import UserContext from "../../contexts/UserContext.js";
import { Link } from "react-router-dom";

function Records({records}) {
    const { token, setRecords } = useContext(UserContext);
    
    const config = useMemo(() => {
        const data = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        return data;
    }, [token]);

    function deleteRecords(id) {
        if (window.confirm("Tem certeza que deseja deletar este laçamento?")){
            const promisse = axios.delete(`http://localhost:5000/records/${id}`, config);
            promisse.then(response => {
                const promisse = axios.get("http://localhost:5000/records", config);
                promisse.then(response => {
                    if (response.data.length > 0) {
                        setRecords(response.data.reverse())
                    }
                });
                promisse.catch(response => {
                    console.log(response);
                });
            });
            promisse.catch(response => {
                console.log(response);
            });
        }
    }

    return (
        <>
            {records.map(record => ( 
                <Div key={record._id}>
                    <div>
                        <Date>{record.date}</Date>
                        <Link to="/updaterecord" state={{ record: record }}>
                            <Name>{record.description}</Name>
                        </Link>
                    </div>
                    <div>
                        <Value type={record.type}>{record.value.toFixed(2)}</Value>
                        <ion-icon onClick={() => deleteRecords(record._id)} name="trash-outline"></ion-icon>
                    </div>
                </Div>
            )) }
        </>
    );
};

export default Records;