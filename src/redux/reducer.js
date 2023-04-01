import { BOOK_TICKET, CANCEL_BOOK } from './actionTypes'

const initialState = []

const nextId = (state) => {
    const newId = state.reduce((maxId, user) => Math.max(maxId, user.id), 0)
    return newId + 1
}

export const reducerFunction = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_TICKET:
            if (state.length < 3) {
                const { destFrom, destTo } = action.payload;
                if (destFrom !== destTo) {
                    return [
                        ...state,
                        {
                            id: nextId(state),
                            newData: action.payload,
                        },
                    ];
                }
            }
            return state;
        
        case CANCEL_BOOK:
            return state.filter(ticket => ticket.id !== action.payload)

        default:
            return state
    }
}