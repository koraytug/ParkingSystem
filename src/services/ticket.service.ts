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