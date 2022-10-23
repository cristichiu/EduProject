import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import Home from "./components";

const Integrate = () => {
    const maxPage = 5
    const navigate = useNavigate()
    const { id } = useParams()
    function pageF(count: string) {
        let page: any = Number(id)
        if(count == 'up') { if(page < maxPage) { page++; navigate("/EduMoldova/" + page) } }
        if(count == 'down') { if(page > 0) { page--; navigate("/EduMoldova/" + page) } }
    }
    return (<>
        <div className="absPos"><Home /></div>
        <div className="keys">
            <div className="key down" onClick={() => pageF("down")}>«</div>
            <div className="key up" onClick={() => pageF("up")}>»</div>
        </div>
    </>)
}

export default Integrate