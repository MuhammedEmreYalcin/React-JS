import { useSelector } from "react-redux";
import "../app.css"

function Counter(){
    const count = useSelector((state) => state.counter.value)
    
    return(
        <div className="counter-value">
            <h2>{count}</h2>
        </div>
    )
}

export default Counter;
