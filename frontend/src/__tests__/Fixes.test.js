import React from "react";
import * as redux from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import Fixes from "../components/Fixes/Fixes";
import { Provider } from "react-redux";
import store from "../redux/store";

const MockFixes = () => {
  return (
    <Provider store={store}>
      <Fixes />
    </Provider>
  );
};

// Mock useSelector's
const fixes = {
  fixes: [
    {
      _id: "625fd0ad5773ce00234103b7",
      id: "4ec0d450-c08b-11ec-a540-6706cb8d7e80",
      car_id: "625fca335773ce002341039d",
      price: "23",
      start_date: "2022-04-20T09:21:49.590Z",
      __v: 0
    }
  ]
};
const selectedItems = {
  selectedCar: "625fca335773ce002341039d"
};

const state = { fixes, selectedItems };

describe("Fixes", () => {
  it("should render fix item", () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));

    render(<MockFixes />);

    const fixesItem = screen.getByTestId("fixes-list-item");

    expect(fixesItem).toBeInTheDocument();
  });

  it("should be able to add new fix", () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));

    render(<MockFixes />);

    const addBtn = screen.getByTestId("add-btn");
    fireEvent.click(addBtn);

    const fixes = screen.queryAllByTestId("fixes-list-item");

    expect(fixes).toHaveLength(2);
  });
});
