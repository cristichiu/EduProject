import { useParams } from "react-router"
import { useState } from 'react'

import Title from "./title"
import Problems from "./problems"
import ElonMusk from "./ElonMusk"
import ProblemSolve from "./problemSove"

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true)

    const { id } = useParams()
    const page = Number(id)
    window.addEventListener("load", () => setLoading(false))
    switch(page) {
        case 0: return (<>{ !loading && <Title />}</>);
        case 1: return (<>{ !loading && <Problems />}</>);
        case 2: return (<>{ !loading && <ElonMusk />}</>);
        case 3: return (<>{ !loading && <ProblemSolve />}</>);
        default: return (<div>Wrong</div>)
    }
}
export default Home