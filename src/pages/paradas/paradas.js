import { useState, useEffect } from 'react';
import './paradas.scss';

export default function calcularParadas(){
    const [ capac, setCapac ] = useState(0);
    const [ cons, setCons ] = useState(0);
    const [ dist, setDist ] = useState(0);
    const [ Qtdparadas, setQtdparadas ] = useState(0);

    function totalParadas() {
        let total = (dist * cons) / capac;

        let resp = total;
        setQtdparadas(Math.ceil(resp));
    }
    
    useEffect(() => {
        totalParadas()
    }, [capac, cons, dist, Qtdparadas])

    return(
        <section className='sct'>
            <div>
                <h2 className='tit'> Calcular quantidade de paradas </h2>
                <p> Informe a capacidade do tanque em litros: </p>
                <input type="number" value={capac} onChange={e => setCapac(Number(e.target.value))}/>
            
                <p> Informe o consumo por km: </p>
                <input type="number" value={cons} onChange={e => setCons(Number(e.target.value))}/>
            
                <p> Informe a distância em km: </p>
                <input type="number" value={dist} onChange={e => setDist(Number(e.target.value))}/>
            </div>

            <div>
                <button className='btt' onClick={totalParadas}> Calcular paradas </button>
            </div>

            <div>
                <h3 className='resp'> Você precisará fazer {Qtdparadas} paradas para abastecer </h3>
            </div>
        </section>
    )
}