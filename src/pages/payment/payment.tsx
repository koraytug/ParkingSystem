import { useState } from "react";
import { findTicket, payTicket } from "../../services/ticket.service";
import "./payment.css";
import { ITicket } from "../../models/iticket";

const Payment = (): JSX.Element => {
    const emptyPriceObj: ITicket = { entranceDate: "", ticketBarcode: "", calculationTime: "", calculatedPrice: 0 }
    const [TicketObj, setTicketObj] = useState(emptyPriceObj);
    const [Succeeded, setSucceeded] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("cash");


    const findTicketObj = async (barcodeNumber: string) => {
        try {
            const ticket: ITicket = await findTicket(barcodeNumber);

            setTicketObj(ticket);
            setSucceeded(true);
        } catch (err) {
            console.error(err);
            setSucceeded(false);
        }
    }

    const payTicketPrice = async () => {
        try {
            if (Succeeded) {
                const paymentSucceeded: boolean = await payTicket(TicketObj.ticketBarcode, paymentMethod);
                if (paymentSucceeded) {
                    alert("Your ticket paid!")
                }
            }
        } catch (err) {
            alert("Your ticket could not paid, Please try again!")
        }
    }

    const handleChange = (e: any) => {
        setPaymentMethod(e.target.value);
    }

    return (
        <div className="payment-page-container">
            <div className="payment-barcode-container">
                <div className="payment-barcode-container-column">
                    <div className="payment-calculate-title">Please insert your ticket or enter the barcode number!</div>
                    <input key="txtBarcode"
                        className="payment-input-barcode"
                        maxLength={18}
                        placeholder="Please Enter Barcode Number Here"
                        type="text"
                        onChange={e => findTicketObj(e.target.value)} />
                </div>
            </div>
            <div className="payment-payment-method-title">
                Please select a payment method
            </div>
            <div className="payment-radio-container">
                <label> <input type="radio" value="credit" onChange={handleChange} name="payment-method" /> Credit Card</label>
                <label ><input type="radio" value="debit" onChange={handleChange} name="payment-method" />Debit Card</label>
                <label ><input type="radio" value="cash" onChange={handleChange} name="payment-method" defaultChecked />Cash</label>
            </div>


            {(Succeeded) &&
                <>
                    <div className="method-title-row">Selected Payment Method : {paymentMethod}</div>
                    <div className="amount-title-row">Amount : {TicketObj.calculatedPrice} €</div>
                    <div className="payment-calculate-button" onClick={payTicketPrice}>Click For Payment</div>
                </>
            }


        </div>
    )
};

export default Payment;

