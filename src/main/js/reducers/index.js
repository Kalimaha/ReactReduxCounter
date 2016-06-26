const counter = (previousState = 0, action) => {
    switch (action.type) {
        case 'INCREASE': return previousState + 1
        case 'DECREASE': return previousState - 1
        default: return previousState
    }
}

export default counter
