import { useNavigate  } from 'react-router-dom';
import { Container, Input, Button, P, Form } from './styles';
import { useContext, useMemo, useState } from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import axios from 'axios';
import Spinner from '../Spinner';
import UserContext from '../../contexts/UserContext';

function NewEntry() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { promiseInProgress } = usePromiseTracker();
    const { token } = useContext(UserContext);

    const data = {
        value: parseFloat(value),
        description: description,
        type: "entry"
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
            const promisse = axios.post("http://localhost:5000/records", data, config);
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
            <P>Nova entrada</P>
            <Form onSubmit={handleSignIn}>
                <Input type="number" value={value} onChange={(e) => setValue(e.target.value)} disabled={promiseInProgress} placeholder='Valor'></Input>
                <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} disabled={promiseInProgress} placeholder='Descrição'></Input>
                <Button type='submit' hide={promiseInProgress}><Spinner /><p>Salvar entrada</p></Button>
            </Form>
        </Container>
    );
}

export default NewEntry;