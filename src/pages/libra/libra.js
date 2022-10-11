import { useEffect, useState } from 'react';
import './signo.scss';


export default function Signo() {
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState();
    const [resp, setResp] = useState('Não');

    function descobrirSigno() {

        if (mes == 'Setembro' && dia >= 23|| mes == 'Outubro' && dia <= 22) {
            setResp('voce é de libra');
        }
        else {
            setResp('voce não é libra');
        }
    }

    useEffect(() =>{
        descobrirSigno()

    }, [mes, dia])

    return (
        <section className='sct'>
            <h2 className='signo'> ### SIGNO LIBRA ### </h2>
            <p> Informe o mês: </p>
            <input type='text' value={ mes } onChange={e => setMes (e.target.value)} />

            <p> Informe o dia: </p>
            <input type='number' value={ dia } onChange= {e => setDia (e.target.value)} />
                
            <button className='btt' onClick={descobrirSigno}> Descobrir signo </button>

            <div>
                <h3 className='rp'>{`É do signo de Libra? ${resp}`}</h3>
            </div>
        </section>
    )
}