const InitialState = {
    menu: []
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload
            };
            default:
                return state
    }
}

export default reducer