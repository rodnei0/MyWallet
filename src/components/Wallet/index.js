import { Bottom, Container, NewRecord, Records, Top } from "./style.js"

function Wallet() {
    return (
        <Container>
            <Top>
                <p>Olá, Fulano</p>
                <ion-icon name="log-out-outline"></ion-icon>
            </Top>
            <Records>
                <p>Não há registros de entrada ou saída</p>
            </Records>
            <Bottom>
                <NewRecord>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </NewRecord>
                <NewRecord>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </NewRecord>
            </Bottom>

        </Container>
    );
}

export default Wallet;