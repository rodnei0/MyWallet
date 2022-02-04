import { Link, useNavigate  } from 'react-router-dom';
import { Container, Input, Button, P, Form, H1 } from './styles';
import { useContext, useState } from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import Spinner from '../Spinner';

function NewEntry() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { promiseInProgress } = usePromiseTracker();

    // let navigate = useNavigate();

    // // if (localStorage.length > 0) {
    // //     const serializedUser = localStorage.getItem("user");
    // //     const user = JSON.parse(serializedUser);
    // //     setToken(user.token);
    // //     setImage(user.image);
    // //     navigate("/hoje");
    // // }
    // const data = {
    //     email: email,
    //     password: password,
    // };

    function handleSignIn(event) {
    //     event.preventDefault();

    //     function fetch() {
    //         const promisse = axios.post("http://localhost:5000/login", data);
    //         promisse.then(handleResponse);
    //         promisse.catch(handleError);
    //         return promisse ;
    //     }

    //     function handleResponse(response) {
    //         const user = response.data;
    //         console.log(user);
    //         setToken(user.token);
    //         setName(user.name);
    //         setRecords(user.records);
    //         // const serializedUser = JSON.stringify(user);
    //         // localStorage.setItem("user", serializedUser);
    //         navigate("/wallet");
    //     }

    //     function handleError(error) {
    //         if (error.response.status === 422) {
    //             alert("Preencha todos os campos corretamente!")
    //         } else if (error.response.status === 401) {
    //             alert("E-mail ou senha incorreta!")
    //         }
    //         console.dir("num funfo :(");
    //         console.dir(error);
    //     }

    //     trackPromise(fetch());
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