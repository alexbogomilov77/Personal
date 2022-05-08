import React from "react";
import * as redux from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import Details from "../components/Problem/Details/Details";
import { Provider } from "react-redux";
import store from "../redux/store";

const MockDetails = () => {
  return (
    <Provider store={store}>
      <Details />
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
const problemsDetailsSingle = {
  details: [
    {
      _id: "625fd7905773ce00234103b9",
      id: "6930b9a0-c08f-11ec-9f46-03341548390c",
      problem_id: "5212be71-c08b-11ec-a540-6706cb8d7e80",
      name: "clean exterior",
      price: "12",
      __v: 0
    }
  ]
};

const state = { selectedItems, problemsDetails };

// For testing delete button
const stateSingleDetail = {
  selectedItems,
  problemsDetails: problemsDetailsSingle
};

describe("Details", () => {
  it("should render inputs and button", () => {
    render(<MockDetails />);

    const nameInput = screen.getByTestId("name-input");
    const priceInput = screen.getByTestId("price-input");
    const addButton = screen.getByRole("button", { name: /add/i });

    expect(nameInput).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("inputs should be functional", () => {
    render(<MockDetails />);

    const nameInput = screen.getByTestId("name-input");
    const priceInput = screen.getByTestId("price-input");

    fireEvent.change(nameInput, { target: { value: "turbo" } });
    fireEvent.change(priceInput, { target: { value: "45" } });

    expect(nameInput.value).toBe("turbo");
    expect(priceInput.value).toBe("45");
  });

  it("should be able to add new detail", () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));

    render(<MockDetails />);

    const nameInput = screen.getByTestId("name-input");
    const priceInput = screen.getByTestId("price-input");
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(nameInput, { target: { value: "turbo" } });
    fireEvent.change(priceInput, { target: { value: "45" } });
    fireEvent.click(addButton);

    const detail = screen.getByText(/turbo/i);
    expect(detail).toBeInTheDocument();
  });

  it("should be able to delete detail", () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(stateSingleDetail));

    render(<MockDetails />);

    const deleteButton = screen.getByTestId("delete-button");
    const detail = screen.getByText(/clean exterior/i);
    fireEvent.click(deleteButton);

    expect(detail).not.toBeInTheDocument();
  });
});
