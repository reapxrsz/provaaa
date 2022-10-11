import { useEffect, useState  } from 'react';
import './acai.scss';

export default function vendaAcai(){
    const [ qtdPeq, setQtdPeq ] = useState(0);
    const [ qtdMed, setQtdMed ] = useState(0);
    const [ qtdGra, setQtdGra ] = useState(0);
    const [ desc, setDesc ] = useState(0);
    const [total, setTotal] = useState(0);
    
    function calcularTotal() {

        let total = qtdPeq * 13.50 + qtdMed * 15 +  qtdGra * 17.50;
        let desconto = total * desc / 100;

        let res = total - desconto;
        setTotal(res);

    }

    useEffect (() => {
        calcularTotal ()
    },
         [ qtdPeq, qtdMed, qtdGra, desc])


    return (
        <section className='sct'>
            <h2 className="tit"> CALCULAR TOTAL ACAI SLA </h2>
            <div>
                <p> Informe a quantidade de açaÍ pequenos: </p>
                <input type='Number' value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))} />

                <p> Informe a quantidade de açaÍ medios: </p>
                <input type='Number' value={qtdMed}  onChange={e=> setQtdMed(Number(e.target.value))}/>
                
                <p> Infrome a quantidade de açaí grandes: </p>
                <input type='Number' value={qtdGra} onChange={e => setQtdGra(Number(e.target.value))} />
                
                <p> Desconto: </p>
                <input type='Number' value={desc} onChange={e => setDesc(Number(e.target.value))} />
            </div>

            <button className='btt' onClick={calcularTotal}> Calcular valor da compra </button>

            <div>
                <h3 className='rp'> O Total da compra é de R$ {total} </h3>
            </div>
        </section>
    )
}