import React from "react";
import * as redux from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import Problem from "../Problem";
import { Provider } from "react-redux";
import store from "../../../redux/store";

const MockProblem = () => {
  return (
    <Provider store={store}>
      <Problem />
    </Provider>
  );
};

// Mock useSelector's
const selectedItems = {
  selectedProblem: {
    _id: "625fd0bc5773ce00234103b8",
    id: "5212be71-c08b-11ec-a540-6706cb8d7e80",
    fix_id: "4ec0d450-c08b-11ec-a540-6706cb8d7e80",
    name: "Change brakes",
    __v: 0
  },
  selectedProblemDetail: "actions"
};
const problemsDetails = {
  details: [
    {
      _id: "625fd7905773ce00234103b9",
      id: "6930b9a0-c08f-11ec-9f46-03341548390c",
      problem_id: "5212be71-c08b-11ec-a540-6706cb8d7e80",
      name: "remove old brakes",
      price: "35",
      __v: 0
    },
    {
      _id: "625fd79c5773ce00234103ba",
      id: "709b3940-c08f-11ec-9f46-03341548390c",
      problem_id: "5212be71-c08b-11ec-a540-6706cb8d7e80",
      name: "setup new brakes",
      price: "20",
      __v: 0
    }
  ]
};
const state = { selectedItems, problemsDetails };

jest
  .spyOn(redux, "useSelector")
  .mockImplementation((callback) => callback(state));

it("should type into name and price input and add new row", () => {
  render(<MockProblem />);

  const nameInput = screen.getByTestId("name-input");
  const priceInput = screen.getByTestId("price-input");
  const addButton = screen.getByRole("button", { name: /add/i });

  fireEvent.change(nameInput, { target: { value: "turbo" } });
  fireEvent.change(priceInput, { target: { value: "45" } });
  fireEvent.click(addButton);

  const divElement = screen.getByText(/turbo/i);
  expect(divElement).toBeInTheDocument();
});
