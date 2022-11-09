import { useState } from "react"
import Integrate from "../integrate"

const Problems = () => {
    const [introducere, setIntroducere] = useState<boolean>(true)
    setTimeout(() => {
        setIntroducere(false)
    }, 3000)
    return (<>
    <div className="absPos">
        {
            introducere
            ?
            <div className="introducere" data-text="Dezavantaje">Dezavantaje</div>
            :
            <iframe src='https://my.spline.design/untitled-cfb290c6dbe9f2036ce507f184eefd1f/' frameBorder='0' width='100%' height='100%'></iframe>
        }
    </div>
    <Integrate />
    </>
    )
}

export default Problems