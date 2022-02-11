import { useContext, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import { Container, H1, Form, Input, Button, P } from './styles';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import Spinner from '../Spinner';


function SingUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {name, setName} = useContext(UserContext);
    
    const { promiseInProgress } = usePromiseTracker();
    let navigate = useNavigate();

    const data = {
        email: email,
        name: name,
        password: password,
    };

    function handleSignUp(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("As senhas não conferem!");
            return
        }

        function fetch() {
            const promisse = axios.post("https://rodnei-mywallet.herokuapp.com/sign-up", data);
            promisse.then(response => navigate("/"));
            promisse.catch(handleError);
            return promisse ;
        }

        function handleError(error) {
            if (error.response.status === 422) {
                alert("Preencha todos os campos corretamente!")
            } else if (error.response.status === 409) {
                alert("Usuário já cadastrado!")
            }
        }
        trackPromise(fetch());
    }

    return (
        <Container>
            <H1>MyWallet</H1>
            <Form onSubmit={handleSignUp}>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={promiseInProgress} placeholder='Nome'></Input>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={promiseInProgress} placeholder='E-mail'></Input>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={promiseInProgress} placeholder='Senha'></Input>
                <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={promiseInProgress} placeholder='Confirme a senha'></Input>
                <Button type='submit' hide={promiseInProgress}><Spinner /><p>Cadastrar</p></Button>
            </Form>
            <Link to="/">
                <P>Já tem uma conta? Entre agora!</P>
            </Link>
        </Container>
    );
}

export default SingUp;