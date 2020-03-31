import { CHECKBOX_ACTION } from "./CheckboxAction"

const initialState = {
    selected: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKBOX_ACTION: return {
            ...state,
            selected: state.selected + 1
        }
        default: return state
    }
}
export default reducer