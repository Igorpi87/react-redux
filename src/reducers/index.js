import { combineReducers } from 'redux'
import {
  REQUEST_WINDS, RECEIVE_WINDS,
  REQUEST_WEATHER, RECEIVE_WEATHER
} from '../actions'

const winds = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_WINDS:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_WINDS:
      return {
        ...state,
        loading: false,
        info: action.winds
      }
    default:
      return state
  }
}

const weather = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        loading: true
      }

    case RECEIVE_WEATHER:
      return {
        ...state,
        loading: false,
        info: action.weather
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  weather,
  winds
})

export default rootReducer
