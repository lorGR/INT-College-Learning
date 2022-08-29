import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main">
            <h1>2 Truths And A Lie</h1>
            <Link to='/login'>
                <button>Let's Play</button>
            </Link>
        </div>
    );
}

export default Main;