import { useState, useEffect, useRef } from 'react';
import './ingresso.scss';

export default function compraIngresso(){
    const [ qtdInteiras, setQtdInteiras ] = useState(0);
    const [ qtdMeias, setqtdMeias ] = useState(0);
    const [ diaSemana, setDiaSemana ] = useState("");
    const [ nacional, setNacional ] = useRef(true);
    const [ totalIngresso, setTotalIngresso ] = useState(0);

    function totalCompra(){
        let total = 0;

        if(nacional === true && diaSemana != "Quarta-feira"){
            total = (qtdMeias + qtdInteiras) * 5
        }

        else if(diaSemana === "Quarta-feira" && nacional === false){
            total = (qtdMeias + qtdInteiras) * 14.25
        }

        else if(nacional === false || diaSemana != "Quarta-feira"){
            total = (qtdMeias + qtdInteiras) * 28.50
        }
 
        else if(nacional === true || diaSemana === "Quarta-feira"){
            total = (qtdMeias + qtdInteiras) * 5
        }
        
        else{
            total = 0;
        }
        setTotalIngresso(total);
    }

    useEffect(() => {
        totalCompra()
    }, [qtdInteiras, qtdMeias, nacional, totalIngresso]);

    return(
        <section className='sct'>
            <div>
                <h2 className='tit'> Calcular total da compra de ingressos: </h2>

                <p> Informe a quantidade de inteiras: </p>
                <input type="number" value={qtdInteiras} onChange={e => setQtdInteiras(Number(e.target.value))}/>


                <p> Informe a quantidade de meias: </p>
                <input type="number" value={qtdMeias} onChange={e => setqtdMeias(Number(e.target.value))}/>

                <p> Informe o dia da semana: </p>
                <input type="text" value={diaSemana} onChange={e => setDiaSemana(Number(e.target.value))}/>

                <p> Informe se o filme é nacional: </p>
                <input id="s"type="checkbox" value={nacional} onChange={e => setNacional(Number(e.target.value))}/>
                <label for="s"> sim </label>
                <input id="ss"type="checkbox" value={nacional} onChange={e => setNacional(Number(e.target.value))}/>
                <label for="ss"> não </label>
            </div>

            <div>
                <button className='btt' onClick={totalCompra}> Calcular total </button>
            </div>

            <div>
                <h3> O total a se pagar pelos ingressos é R${setTotalIngresso} </h3>
            </div>
        </section>
    )
}