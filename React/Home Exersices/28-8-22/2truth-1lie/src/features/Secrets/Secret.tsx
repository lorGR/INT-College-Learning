import { useParams } from "react-router-dom";

const Secret = () => {

    const {secretId} = useParams();
    console.log(secretId);
    return(
        <div className="secret">
            <h1>Secret</h1>
        </div>
    );
} 

export default Secret;