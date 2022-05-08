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

describe("Action buttons", () => {
  it("should pre-select actions button", () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));

    render(<MockProblem />);

    const actionsBtn = screen.getByTestId("actions-btn");
    const partsBtn = screen.getByTestId("parts-btn");

    expect(actionsBtn).toHaveClass("selected");
    expect(partsBtn).not.toHaveClass("selected");
  });

  it("should switch active button on click", async () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));

    render(<MockProblem />);

    const actionsBtn = screen.getByTestId("actions-btn");
    const partsBtn = screen.getByTestId("parts-btn");
    fireEvent.click(partsBtn);

    expect(partsBtn).toHaveClass("selected");
    expect(actionsBtn).not.toHaveClass("selected");
  });
});
