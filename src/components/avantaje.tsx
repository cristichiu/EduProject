import { useEffect, useState } from 'react'
import '../../setPublic/css/avantaje.css'
import Integrate from '../integrate'

const Avantaje = () => {
    const [introducere, setIntroducere] = useState<boolean>(true)
    setTimeout(() => {
        setIntroducere(false)
    }, 3000)
    return (<>
    <div className='absPos'>
        {
            introducere
            ?
            <div className='introducere' data-text="Avantaje">Avantaje</div>
            :
            <div className="container">
                <div>
                    <h1>Știi câte puțin din tot.</h1>
                    <h3>Îți oferă mai multe posibilități și îți este mai ușor să te adaptezi la orice sistem de învățământ.</h3>
                </div>
                <div>
                    <h1>Sunt destule instituții și profesori pentru a satisface populația.</h1>
                </div>
                <div>
                    <h1>Nu avem mai mult de 7 ore pe zi.</h1>
                </div>
            </div>
        }
    </div>
    <Integrate />
    </>)
}

export default Avantaje