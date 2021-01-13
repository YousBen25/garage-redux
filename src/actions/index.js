// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const CAR_CREATED = 'CAR_CREATED';
export const REMOVE_CAR = 'REMOVE_CAR';

export function removeCar(history, car) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));

  return {
    type: REMOVE_CAR,
    payload: car
  };
}


export function createCar(garage, car, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then(response => response.json())
    .then(callback);
  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}
