import { useLocation, useNavigate  } from 'react-router-dom';
import { Container, Input, Button, P, Form } from './styles';
import { useContext, useMemo, useState } from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import axios from 'axios';
import Spinner from '../Spinner';
import UserContext from '../../contexts/UserContext';

function NewRecord() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { promiseInProgress } = usePromiseTracker();
    const { token } = useContext(UserContext);

    const location = useLocation();
    const { type } = location.state;

    const data = {
        value: parseFloat(value),
        description: description,
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

    function handleSignIn(event) {
        event.preventDefault();

        function fetch() {
            const promisse = axios.post("https://rodnei-mywallet.herokuapp.com/records", data, config);
            promisse.then(response => navigate("/wallet"));
            promisse.catch(handleError);
            return promisse ;
        }

        function handleError(error) {
            if (error.response.status === 422) {
                alert("Preencha todos os campos corretamente!")
            }
            console.dir(error);
        }

        trackPromise(fetch());
    }

    return (
        <Container>
            <P>{type === "entry" ? "Nova entrada" : "Nova saída"}</P>
            <Form onSubmit={handleSignIn}>
                <Input type="number" value={value} onChange={(e) => setValue(e.target.value)} disabled={promiseInProgress} placeholder='Valor'></Input>
                <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} disabled={promiseInProgress} placeholder='Descrição'></Input>
                <Button type='submit' hide={promiseInProgress}><Spinner /><p>{type === "entry" ? "Salvar entrada" : "Salvar saída"}</p></Button>
            </Form>
        </Container>
    );
}

export default NewRecord;