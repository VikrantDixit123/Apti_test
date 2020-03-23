import { CheckboxAction } from "./CheckboxAction"

const initialState = {
    selected: []
}
console.log("In reducer");

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CheckboxAction: return {
            ...state,
        }
        default: return state
    }
}
export default reducer