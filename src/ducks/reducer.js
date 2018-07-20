const initialState = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      imageurl: '',
      mortgage: '',
      rent: '',

}
const ADD_PROPERTY_NAME= "ADD_PROPERTY_NAME";
const ADD_ADDRESS = "ADD_ADDRESS";
const ADD_CITY = "ADD_CITY";
const ADD_STATE = "ADD_STATE";
const ADD_ZIP = "ADD_ZIP";
const ADD_IMAGEURL="ADD_IMAGEURL";
const ADD_MORTGAGE = "ADD_MORTGAGE";
const ADD_RENT = "ADD_RENT";





export function addPropertyName(name) {
    return {
        type: ADD_PROPERTY_NAME,
        payload: name
    }
}
export function addAddress(address) {
    return {
        type: ADD_ADDRESS,
        payload: address
    }
}
export function addCity(city) {
    return {
        type: ADD_CITY,
        payload: city
    }
}
export function addState(state) {
    return {
        type: ADD_STATE,
        payload: state
    }
}
export function addZip(zip) {
    return {
        type: ADD_ZIP,
        payload: zip
    }
}
export function addImageUrl(image) {
    return {
        type: ADD_IMAGEURL,
        payload: image
    }
}
export function addMortgage(mortgage) {
    return {
        type: ADD_MORTGAGE,
        payload: mortgage
    }
}

export function addRent(rent) {
    return {
        type: ADD_RENT,
        payload: rent
    }
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PROPERTY_NAME:
            return Object.assign({}, state, { name: action.payload });
        
        case ADD_ADDRESS:
            return Object.assign({}, state, { address: action.payload });
        
        case ADD_CITY:
            return Object.assign({}, state, { city: action.payload });
        
        case ADD_STATE:
            return Object.assign({}, state, { state: action.payload });
        
        case ADD_ZIP:
            return Object.assign({}, state, { zip: action.payload });
        
        case ADD_IMAGEURL:
            return Object.assign({}, state, { image: action.payload });
        
        case ADD_MORTGAGE:
            return Object.assign({}, state, { mortgage: action.payload });
        
        case ADD_RENT:
            return Object.assign({}, state, { rent: action.payload });
        
        default: return state;
    }

}

export default reducer;