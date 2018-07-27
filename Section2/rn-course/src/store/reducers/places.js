import * as types from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri: "https://cdn.20m.es/img/2009/02/11/928966.jpg"
          }
        })
      };

    case types.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      }

    case types.SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      }

    case types.DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    default:
      return state;
  }
};

export default reducer;