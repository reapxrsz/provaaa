import { useState, useEffect } from 'react';
import './salario.scss';

export default function calcularSalario(){
    const [ salario, setSalario ] = useState(0);
    const [ bonus, setBonus ] = useState(0);
    const [ desc, setDesc ] = useState(0);
    const [ totalSal, setTotalSal ] = useState(0);

    function totalSalario(){
        let total = (salario * bonus) / 100;
        let desconto = (salario + total) - desc;
        
        let resp = desconto;
        setTotalSal(resp);
    }

    useEffect(() => {
        totalSalario()
    }, [salario, bonus, desc])

    return(
        <section className='sct'>
            <div>
                <h2 className='tit'> Calcular salário líquido </h2>
                <p> Informe o salário base: </p>
                <input type="number" value={salario} onChange={e => setSalario(Number(e.target.value))}/>
        
                <p> Informe o bõnus mensal em porcentagem: </p>
                <input type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
            
                <p> Informe o desconto em reais: </p>
                <input type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}/>
            </div>
            
            <div>
                <button className='btt' onClick={totalSalario}> Calcular salário líquido </button>
            </div>

            <div>
                <h3 className='resp'> Seu salário líquido é de R${totalSal} </h3>
            </div>
        </section>
    )
}