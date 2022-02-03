import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;     
    justify-content: center;
    align-items: center;

    min-height: 100vh;
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

    ion-icon:hover {
        cursor: pointer;
    }
`;

const Records = styled.section`
    width: 326px;
    height: 446px;

    background: #FFFFFF;
    border-radius: 5px;

    margin-bottom: 13px;

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

export {
    Container, Records, Top, Bottom, NewRecord
}