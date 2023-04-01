import { BOOK_TICKET, CANCEL_BOOK } from './actionTypes'

export const bookTicket = (bookingData) => {
    return {
        type: BOOK_TICKET,
        payload: bookingData
    }
}

export const cancleBook = (id) => {
    return {
        type: CANCEL_BOOK,
        payload: id
    }
}