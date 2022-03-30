import { useState } from "react";
import { checkFreeSpaces, } from "../../services/ticket.service";
import "./check-free-spaces.css";

const CheckFreeSpaces = (): JSX.Element => {
    const [Succeeded, setSucceeded] = useState(false);
    const [freeSpaces, setFreeSpaces] = useState("0");

    const checkSpaces = async () => {
        try {
            const count: string = await checkFreeSpaces();

            setFreeSpaces(count);
            setSucceeded(true);
        } catch (err) {
            alert("Could not get free spaces")
            setSucceeded(false);
        }
    }


    return (
        <div className="free-spaces-page-container">
            <div className="check-spaces-button" onClick={checkSpaces}>Check Free Spaces</div>
            {(Succeeded) &&
                <>
                    <div className="status-title-row">Free Spaces Count : {freeSpaces}</div>
                </>
            }

        </div>
    )
};

export default CheckFreeSpaces;

