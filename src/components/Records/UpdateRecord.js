import { useLocation, useNavigate  } from 'react-router-dom';
import { Container, Input, Button, P, Form } from './styles';
import { useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';

function UpdateRecords() {
    const [ newValue, setNewValue ] = useState("");
    const [ newDescription, setNewDescription ] = useState("");
    const { token } = useContext(UserContext);

    const location = useLocation();
    const { type, description, value, _id } = location.state.record;

    useEffect(() => {
        setNewDescription(description);
        setNewValue(value);
    },[description, value]);

    const data = {
        value: parseFloat(newValue),
        description: newDescription,
        type: type
    };

    const config = useMemo(() => {
        const data = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        return data;
    }, [token]);

    let navigate = useNavigate();

    function updateRecords(event) {
        event.preventDefault();

        const promisse = axios.put(`https://rodnei-mywallet.herokuapp.com/records/${_id}`, data, config);
        promisse.then(navigate("/wallet"));
        promisse.catch(response => {
            console.log(response);
        });
    }

    return (
        <Container>
            <P>{type === "entry" ? "Editar entrada" : "Editar saída"}</P>
            <Form onSubmit={updateRecords}>
                <Input type="number" value={newValue} onChange={(e) => setNewValue(e.target.value)} placeholder='Valor'></Input>
                <Input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder='Descrição'></Input>
                <Button type='submit' ><p>{type === "entry" ? "Atualizar entrada" : "Atualizar saída"}</p></Button>
            </Form>
        </Container>
    );
}

export default UpdateRecords;