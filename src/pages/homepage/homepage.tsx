import { useNavigate } from "react-router-dom";
import "./homepage.css";

const HomePage = (): JSX.Element => {
    const history = useNavigate();

    return (<div className="homepage-container">
        <div className='op-item' onClick={() => {
            history("/get-ticket"); window.localStorage.removeItem("ticket");
        }}>Get Ticket</div>
        <div className='op-item' onClick={() => {
            history("/calculate-price");
        }}>Calculate Price</div>
        <div className='op-item'>Pay Ticket</div>
        <div className='op-item'>Check Ticket State</div>
        <div className='op-item'>Check Free Space</div>
    </div>)

};

export default HomePage;
