export default async function getTicket(): Promise<any> {
    try {
        const response = await fetch("http://localhost:4400/get_new_ticket/", { mode: "cors" });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return Promise.resolve(data.data);
    } catch (error: any) {
        return Promise.reject(error);
    }
}

export async function getCalculatedPrice(barcode: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:4400/get_calculated_price?barcode=${barcode}`, { mode: "cors" });

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return Promise.resolve(data);
    } catch (error: any) {
        return Promise.reject(error);
    }
}

export const getTicketDate = (strDate: string): string => {
    const date = new Date(strDate);
    let month: string = date.getMonth().toString();
    if (Number(month) < 10) {
        month = "0" + month;
    }

    let day: string = date.getDate().toString();
    if (date.getDate() < 10) {
        day = "0" + day;
    }

    const year: string = date.getFullYear().toString();

    return `${day} / ${month} / ${year}`;

};

export const getTicketTime = (strDate: string): string => {
    const date = new Date(strDate);
    const hours: string = date.getHours().toString();
    const minutes: string = date.getMinutes().toString();
    const seconds: string = date.getSeconds().toString();

    return `${hours}:${minutes}:${seconds}`;
};

export async function findTicket(barcode: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:4400/find_ticket?barcode=${barcode}`, { mode: "cors" });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        return Promise.resolve(data);
    } catch (error: any) {
        return Promise.reject(error);
    }
}

export async function payTicket(barcode: string, paymentMethod: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:4400/pay_ticket?barcode=${barcode}&paymentmethod=${paymentMethod}`, { mode: "cors" });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        return Promise.resolve(data);
    } catch (error: any) {
        return Promise.reject(error);
    }
}

export async function getTicketStatus(barcode: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:4400/get_ticket_state?barcode=${barcode}`, { mode: "cors" });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        console.log("checkTicket data =>", data)

        return Promise.resolve(data);
    } catch (error: any) {
        return Promise.reject(error);
    }
}


export async function setOpenTheDoor(barcode: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:4400/set_door_exit?barcode=${barcode}`, { mode: "cors" });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        return Promise.resolve(data);
    } catch (error: any) {
        return Promise.reject(error);
    }
}

export async function checkFreeSpaces(): Promise<any> {
    try {
        const response = await fetch("http://localhost:4400/get_free_spaces", { mode: "cors" });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        return Promise.resolve(data);
    } catch (error: any) {
        return Promise.reject(error);
    }
}