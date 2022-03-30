import { useState } from "react";
import { getTicketStatus, setOpenTheDoor } from "../../services/ticket.service";
import "./check-ticket-state.css";

const CheckTicketState = (): JSX.Element => {
    const [Succeeded, setSucceeded] = useState(false);
    const [barcodeNumber, setBarcodeNumber] = useState("");

    const [ticketStatus, setTicketStatus] = useState("");


    const checkTicket = async (barcode: string) => {
        try {
            setBarcodeNumber(barcode);
            const status: string = await getTicketStatus(barcode);

            setTicketStatus(status);
            setSucceeded(true);
        } catch (err) {
            console.error(err);
            setSucceeded(false);
        }
    }

    const openTheDoor = async () => {
        try {
            await setOpenTheDoor(barcodeNumber);

            // setTicketStatus(status);
            // setSucceeded(true);
        } catch (err) {
            alert("Door Could not Open!")
            // setSucceeded(false);
        }
    }

    return (
        <div className="state-page-container">
            <div className="state-barcode-container">
                <div className="state-barcode-container-column">
                    <div className="state-calculate-title">Please insert your ticket or enter the barcode number!</div>
                    <input key="txtBarcode"
                        className="state-input-barcode"
                        maxLength={18}
                        placeholder="Please Enter Barcode Number Here"
                        type="text"
                        onChange={e => checkTicket(e.target.value)} />
                </div>
            </div>


            {(Succeeded) &&
                <>
                    <div className="status-title-row">Ticket Status : {ticketStatus}</div>
                </>
            }
            <div className="open-door-button" onClick={openTheDoor}>Open The Door</div>

        </div>
    )
};

export default CheckTicketState;

