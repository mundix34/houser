const initialState = {
    name: '',
      address: '',
      city: '',
      state: '',
      zip: ''

}
const UPDATE_PROPERTY = "UPDATE_PROPERTY";





export function updateProperty(property) {
    return {
        type: UPDATE_PROPERTY,
        payload: property
    }
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROPERTY:
            return Object.assign({}, state, { name: action.payload });
        
        default: return state;
    }

}

export default reducer;