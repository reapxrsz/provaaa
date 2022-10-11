import { useState, useEffect } from 'react';
import './gramas.scss';


export default function Gramas() {
    const [gramas, setGramas] = useState(0);
    const [total, setTotal] = useState(0);

    function calcularTotal() {
        let valor = 0;

        if(gramas > 1000) {
            valor = (gramas/100) * 3;
        }

        else {
            valor = (gramas / 100) * 3.50;
        }
        setTotal(valor);
    }

    useEffect(() => {
        calcularTotal()
    }, [gramas]);

    return (
        <section className='sct'>
            <h2 className='tit'> Sorveteria: </h2>

            <div>
                <p> Gramas: </p>
                <input type='number' value={gramas} onChange={e => setGramas(e.target.value)} />
            </div>

            <button className='btt' onClick={calcularTotal}> Calcular total da compra </button>

            <div>
                <h3 className='rp'> O total da compra é de R$ {total} </h3>
            </div>
        </section>
    )
}