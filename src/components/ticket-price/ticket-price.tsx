
import { useEffect, useState } from "react";
import { useBarcode } from "react-barcodes";
import { ITicketCalculation } from "../../models/iticket-calculation";
import parkingLogo from "../../assets/car-lot-icon.png";
import "./ticket-price.css";

type TicketPriceProps = {
    ticketCalculation: ITicketCalculation
};

const TicketPrice = (props: TicketPriceProps): JSX.Element => {
    const [fromDateTime, setFromDateTime] = useState("");
    const [toDateTime, setToDateTime] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        console.log("props.ticketCalculation", props.ticketCalculation)
        if (props.ticketCalculation !== undefined) {
            setFromDateTime(props.ticketCalculation.entranceDate);
            setToDateTime(props.ticketCalculation.calculationTime)
            setPrice(props.ticketCalculation.price)
        }

    }, [props.ticketCalculation])


    const { inputRef } = useBarcode({
        value: props.ticketCalculation.ticketBarcode,
        options: {
            background: "#ffffff",
            height: 70
        }
    });

    return (
        <div className="ticket-container">
            <div className="ticket-title">
                <div className="ticket-logo-column">
                    <img src={parkingLogo} alt="parking logo" />
                </div>
                <div className="ticket-company-name">
                    Platogo Parking System
                </div>
            </div>
            <div className="title-receipt">
                Parking Receipt
            </div>

            <div className="date-row">
                From: {fromDateTime}
            </div>
            <div className="date-row">
                To: {toDateTime}
            </div>
            <div className="price-row">
                Cost: {price} €
            </div>

            <div className="thank-row">
                thank you and drive safely!
            </div>
            <div className="barcode-row">
                <svg className="barcode" ref={inputRef} />
            </div>
        </div>
    )
};

export default TicketPrice;
