import { FETCH_CARS, REMOVE_CAR } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case REMOVE_CAR:
      return state.filter(car => car !== action.payload);
      // filter retourne un nouveau tableau contenant tous les elements sauf la voiture supprimé
    default:
      return state;
  }
}
