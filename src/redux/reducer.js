

export const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'REDUCE':
            return state - 1
        default:
            return state
    }
}
