import {
  FETCH_PLANETS,
  SELECT_PLANETS,
  FETCH_NON_SELECTED_PLANETS
} from "../actions/types";

const initialState = {
  allplanets: [],
  selectedPlanet: [],
  nonSelectedPlanets: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLANETS:
      return {
        ...state,
        allplanets: action.data
      };
    case SELECT_PLANETS:
      let selectedPlanet = [...state.selectedPlanet];
      selectedPlanet.push(action.data);
      return {
        ...state,
        selectedPlanet: selectedPlanet
      };
    default:
      return state;
  }
}
