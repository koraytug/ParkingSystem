import { useNavigate } from "react-router-dom";
import "./homepage.css";

const HomePage = (): JSX.Element => {
    const history = useNavigate();

    return (<div className="homepage-container">
        <div className='op-item' onClick={() => {
            history("/get-ticket");
        }}>Get Ticket</div>
    </div>)

};

export default HomePage;
