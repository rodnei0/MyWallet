import { Div, Date, Name, Value } from "./style.js"

function Records({records}) {
    return (
        <>
            {records.map(record => ( 
                <Div>
                    <div>
                        <Date>{record.date}</Date><Name>{record.description}</Name>
                    </div>
                    <Value type={record.type}>{record.value.toFixed(2)}</Value>
                </Div>
            )) }
        </>
    );
}

export default Records;