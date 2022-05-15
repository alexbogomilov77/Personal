import { Car } from "../interfaces/Car";

export const SET_CARS = "SET_CARS";

export interface CarsStateType {
  cars: Car[] | null;
}

interface SetCarsActionType {
  type: typeof SET_CARS;
  payload: Car[];
}
export type CarsActionTypes = SetCarsActionType;
