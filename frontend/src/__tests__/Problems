import * as redux from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import Problems from "../components/Problems/Problems";
import ProblemModal from "../components/modals/ProblemModal";
import { Provider } from "react-redux";
import store from "../redux/store";

const MockProblems = () => {
  return (
    <Provider store={store}>
      <Problems />
    </Provider>
  );
};

const MockProblemModal = () => {
  return (
    <Provider store={store}>
      <ProblemModal />
    </Provider>
  );
};

// Mock useSelector's
const selectedItems = {
  selectedFix: "4ec0d450-c08b-11ec-a540-6706cb8d7e80",
};
const problems = {
  problems: [
    {
      _id: "625fd0bc5773ce00234103b8",
      id: "5212be71-c08b-11ec-a540-6706cb8d7e80",
      fix_id: "4ec0d450-c08b-11ec-a540-6706cb8d7e80",
      name: "Change brakes",
      __v: 0,
    },
  ],
};

const state = { selectedItems, problems };

describe("Problems", () => {
  it("render item in list and mark as selected on click", () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));

    render(<MockProblems />);

    const problemsItem = screen.getByTestId("problems-list-item");
    expect(problemsItem).toBeInTheDocument();
    expect(problemsItem).not.toHaveClass("selected-problem");

    fireEvent.click(problemsItem);
    expect(problemsItem).toHaveClass("selected-problem");
  });

  it("should open new problem modal", () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));

    render(<MockProblems />);

    const newBtn = screen.getByTestId("new-problem");
    fireEvent.click(newBtn);

    const modal = screen.getByTestId("modal-body");
    expect(modal).toBeInTheDocument();
  });

  it("should write into input, submit and close modal", () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));

    const closeModal = jest.fn();

    render(
      <Provider store={store}>
        <ProblemModal closeModal={closeModal} />
      </Provider>
    );

    const nameInput = screen.getByTestId("name-input");
    const submitBtn = screen.getByTestId("submit-button");

    fireEvent.change(nameInput, { target: { value: "Check Engine" } });
    fireEvent.click(submitBtn);

    expect(closeModal).toHaveBeenCalled();
  });
});
