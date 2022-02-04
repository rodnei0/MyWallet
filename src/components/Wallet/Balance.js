import { BalanceDiv } from "./style.js"


function Balance({records}) {
    let balance = 0;
    
    records.map(record => {
        if (record.type === "entry") {
            balance+= record.value;
        } else {
            balance-= record.value
        }
        return balance
    });

    return (
        <BalanceDiv balance={balance > 0 ? true : false}> 
            <p>SALDO</p>
            <div>{balance.toFixed(2)}</div>
        </BalanceDiv>
    );
}

export default Balance;