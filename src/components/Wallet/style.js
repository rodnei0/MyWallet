import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;     
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    ion-icon {
        margin-top: 2px;
        color: #C6C6C6;
    }

    ion-icon:hover {
        cursor: pointer;
    }
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 326px;

    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;

    margin-bottom: 22px;

    ion-icon {
        color: #FFFFFF;
    }

    ion-icon:hover {
        cursor: pointer;
    }
`;

const Records = styled.section`
    display: flex;
    flex-direction: column; 

    width: 326px;
    height: 446px;
    padding: 22px 11px 11px 11px;

    background: #FFFFFF;
    border-radius: 5px;

    margin-bottom: 13px;

    position: relative;

    p {
        font-size: 20px;
        line-height: 23px;
        color: #868686;
    }
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 326px;
`;

const NewRecord= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 155px;
    height: 114px;
    padding: 10px;

    background: #A328D6;
    border-radius: 5px;

    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;

    &:hover {
        cursor: pointer;
    }

    ion-icon {
        font-size: 22px;
        color: #FFFFFF;
    }

    p {
        width: 64px;
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 10px;

    div {
        display: flex;
        justify-content: center;
    }
`;

const Name = styled.span`
    margin-left: 5px;

    font-size: 16px;
    line-height: 19px;
    color: #000000;
`;

const Date = styled.time`
    font-size: 16px;
    line-height: 19px;

    color: #C6C6C6;
`;

const Value = styled.span`
    font-size: 16px;
    line-height: 19px;
    margin-right: 5px;

    color: ${props => props.type === "entry" ? "#03AC00" : '#C70000'};
`;

const BalanceDiv = styled.div`
    display: flex;
    justify-content: space-between;

    width: 304px;

    position: absolute;
    bottom: 11px;

    p {
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }

    div {
        font-size: 17px;
        line-height: 20px;
        color: ${props => props.balance ? "#03AC00" :'#C70000'};
    }
`;

const NoRecords = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%
`;

const P = styled.p`
    width: 180px;
    text-align: center;
`;

export {
    Container, Records, Top, Bottom, NewRecord, Div, Name, Date, Value, BalanceDiv, NoRecords, P
}