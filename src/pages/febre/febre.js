import { useState, useEffect } from 'react';
import './febre.scss';

export default function situacaoCorp(){
    const [ temp, setTemp ] = useState(0);
    const [ situacao, setSituacao ] = useState(0);
    
    function situacaoFebre(){
        let temperatura = "";

        if(temp >= 36 || temp < 37.6){
            temperatura = "Normal"
        }

        else if(temp > 37.6 || temp < 39.6){
            temperatura = "Febre"
        }

        else if(temp > 39.6 || temp < 41){
            temperatura = "Febre Alta"
        }

        else if(temp >= 41){
            temperatura = "Hipertemia"
        } 
        
        else if(temp < 36){
            temperatura = "Hipotermia"
        }

        else{
            temperatura = "Temperatura inválida"
        }
        setSituacao(temperatura);
    }

    useEffect(() => {
        situacaoFebre()
    }, [temp, situacao]);

    return(
        <section>
            <div>
                <h2 className='tit'> Situação corporal </h2>

                <p> Informe sua temperatura: </p>
                <input type="number" value={temp} onChange={e => setTemp(Number(e.target.value))}/>
            </div>
                
            <div>
                <button className='btt' onClick={situacaoFebre}> Avaliar temperatura corpórea </button>
            </div>

            <div>
                <h3 className='resp'> A situação para sua temperatura é {setSituacao}</h3>
            </div>
        </section>
    )
}