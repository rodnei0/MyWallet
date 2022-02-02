import { Link, useNavigate  } from 'react-router-dom';
import { Container, Input, Button, P, Form, H1 } from './styles';
import { useContext, useState } from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import axios from 'axios';
// import logo from "../../assets/images/trackit.png";
// import UserContext from '../../contexts/UserContext';
import Spinner from '../Spinner';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { setToken, setImage } = useContext(UserContext);
    const { promiseInProgress } = usePromiseTracker();
    let navigate = useNavigate();

    // if (localStorage.length > 0) {
    //     const serializedUser = localStorage.getItem("user");
    //     const user = JSON.parse(serializedUser);
    //     setToken(user.token);
    //     setImage(user.image);
    //     navigate("/hoje");
    // }

    function handleSignIn(event) {
        event.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        // function fetch() {
        //     const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", data);
        //     promisse.then(handleResponse);
        //     promisse.catch(handleError);
        //     return promisse ;
        // }

        // function handleResponse(response) {
        //     const user = response.data;
        //     setImage(user.image);
        //     setToken(user.token);
        //     const serializedUser = JSON.stringify(user);
        //     localStorage.setItem("user", serializedUser);
        //     navigate("/hoje");
        // }

        // function handleError(error) {
        //     if (error.response.status === 422) {
        //         alert("Preencha todos os campos corretamente!")
        //     } else if (error.response.status === 401) {
        //         alert("Usuário ou senha incorreta, verifique!")
        //     }
        //     console.dir(error);
        // }
        // trackPromise(fetch());
    }

    return (
        <Container>
            <H1>MyWallet</H1>
            <Form onSubmit={handleSignIn}>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={promiseInProgress} placeholder='E-mail'></Input>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={promiseInProgress} placeholder='Senha'></Input>
                <Button type='submit' hide={promiseInProgress}><Spinner /><p>Entrar</p></Button>
            </Form>
            <Link to="/sign-up">
                <P>Primeira vez? Cadastre-se!</P>
            </Link>
        </Container>
    );
}

export default Login;