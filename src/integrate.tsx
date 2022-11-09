import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Integrate = () => {
    const maxPage = 9
    const navigate = useNavigate()
    const { id } = useParams()
    function pageF(count: string) {
        let page: any = Number(id)
        if(count == 'up') { if(page < maxPage) { page++; navigate(`/${page}/${page}`) } }
        if(count == 'down') { if(page > 0) { page--; navigate(`/${page}/${page}`) } }
    }
    return (<>
        <div className="keys">
            <div className="key down" onClick={() => pageF("down")}>«</div>
            <div className="key up" onClick={() => pageF("up")}>»</div>
        </div>
    </>)
}

export default Integrate