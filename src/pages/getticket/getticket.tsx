import { useEffect, useState } from "react";
import getTicket from "../../services/ticket.service";
import "./getticket.css";
import Ticket from "../../components/ticket/ticket";
import { ITicket } from "../../models/iticket";

const GetTicket = (): JSX.Element => {
    const emptyTicket: ITicket = { entranceDate: "", ticketBarcode: "" }
    const [ticket, setTicket] = useState(emptyTicket);
    const [Succeeded, setSucceeded] = useState(false);


    useEffect(() => {
        if (window.localStorage.getItem("ticket") === null) {
            setSucceeded(false);
            return;
        }
        const cachedTicket: ITicket = JSON.parse(window.localStorage.getItem("ticket") || "");

        if (cachedTicket && cachedTicket && cachedTicket !== { entranceDate: "", ticketBarcode: "" }) {
            setSucceeded(true)
            setTicket(cachedTicket);
        }

        return () => {
            window.localStorage.removeItem("ticket")
        };

    }, [])

    const getNewTicket = async () => {
        try {
            const getTicketResult = await getTicket();
            window.localStorage.setItem("ticket", JSON.stringify(getTicketResult));
            setTicket(getTicketResult);
            setSucceeded(true);
        } catch (err) {
            console.error(err);
            setSucceeded(false);
        }
    }

    return (
        <div className="ticket-page-container">
            <div className="ticket-button" onClick={getNewTicket}>Click For Ticket</div>

            {(Succeeded) &&
                <>
                    <Ticket ticket={ticket}></Ticket>
                </>
            }
        </div>
    )
};

export default GetTicket;

