import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;     
    align-items: center;

    padding-top: 25px;
    min-height: 100vh;
`;

const Form = styled.form`
    width: 326px;
`;

const Input = styled.input`
    width: 100%;
    height: 45px;
    padding-left: 5px;

    font-size: 20px;
    line-height: 23px;
    color: #000000;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    margin-bottom: 8px;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 45px;

    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;

    background: #A328D6;
    border: 0;
    border-radius: 4.63636px;

    margin-bottom: 25px;

    &:hover {
        cursor: pointer;
      }

    p {
        display: ${props => props.hide ? 'none' : 'flex'};
        justify-content: center;
        width: 100%;

        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }
`;

const P = styled.p`
    width: 326px;
    margin-bottom: 40px;

    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`;

export {
    Container, Form, Input, Button, P
}