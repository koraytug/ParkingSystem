import { useState } from "react";
import { getCalculatedPrice } from "../../services/ticket.service";
import { ITicketCalculation } from "../../models/iticket-calculation";
import TicketPrice from "../../components/ticket-price/ticket-price";
import "./calculate-price.css";

const CalculatePrice = (): JSX.Element => {
    const emptyPriceObj: ITicketCalculation = { entranceDate: "", ticketBarcode: "", calculationTime: "", price: 0 }
    const [calculatedPriceObj, setCalculatedPriceObj] = useState(emptyPriceObj);
    const [Succeeded, setSucceeded] = useState(false);
    const [barcode, setBarcode] = useState("");


    const calculatePrice = async () => {
        try {
            const calculatedPrice = await getCalculatedPrice(barcode);
            window.localStorage.setItem("ticketPriceObject", JSON.stringify(calculatedPrice));
            setCalculatedPriceObj(calculatedPrice);
            setSucceeded(true);
        } catch (err) {
            console.error(err);
            setSucceeded(false);
        }
    }

    return (
        <div className="calculate-page-container">
            <div className="barcode-container">
                <div className="barcode-container-column">
                    <div className="calculate-title">Please insert your ticket or enter the barcode number!</div>
                    <input key="txtBarcode"
                        className="input-barcode"
                        maxLength={18}
                        placeholder="Please Enter Barcode Number Here"
                        type="text"
                        onChange={e => setBarcode(e.target.value)} />
                </div>
            </div>
            <div className="ticket-calculate-button" onClick={calculatePrice}>Click For Calculate</div>

            {(Succeeded) &&
                <>
                    <TicketPrice ticketCalculation={calculatedPriceObj} />
                </>
            }
        </div>
    )
};

export default CalculatePrice;

