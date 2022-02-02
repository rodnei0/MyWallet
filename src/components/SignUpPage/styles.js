import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;     
    justify-content: center;
    align-items: center;

    min-height: 100vh;
`;

const Form = styled.form`
    width: 303px;
`;

const Input = styled.input`
    width: 303px;
    height: 45px;
    padding-left: 5px;

    font-size: 18px;
    line-height: 25px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    margin-bottom: 6px;
`;

const Button = styled.button`
    width: 303px;
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
    }
`;

const P = styled.p`
    font-size: 13.976px;
    font-weight: bold;
    line-height: 17px;
    color: #FFFFFF;
`;

const H1 = styled.h1`
    font-family: Saira Stencil One;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;

    margin-bottom: 25px;
`;

export {
    Container, H1, Form, Input, Button, P
}