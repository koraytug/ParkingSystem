
import { useEffect, useState } from "react";
import "./ticket.css";
import parkingLogo from "../../assets/car-lot-icon.png";
import { useBarcode } from "react-barcodes";
import { ITicket } from "../../models/iticket";
import { getTicketDate, getTicketTime } from "../../services/ticket.service";

type TicketProps = {
    ticket: ITicket
};

const Ticket = (props: TicketProps): JSX.Element => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (props.ticket !== undefined) { 
            const date = getTicketDate(props.ticket.entranceDate);
            const time = getTicketTime(props.ticket.entranceDate)
            setDate(date);
            setTime(time)
        }

    }, [props.ticket])


    const { inputRef } = useBarcode({
        value: props.ticket.ticketBarcode, //"react-barcodes",
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
                Parking Ticket
            </div>

            <div className="time-row">
                {time}
            </div>
            <div className="date-row">
                {date}
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

export default Ticket;
