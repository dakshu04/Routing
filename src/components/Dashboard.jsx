
import { useNavigate} from "react-router-dom";

export default function Dashboard(){
    const navigate = useNavigate();

    function handleClick(){
        navigate('/')
    }

    return (
        <div>
            Dashboard
            <button onClick={handleClick}>Click to navigate</button>
        </div>
    )
} 