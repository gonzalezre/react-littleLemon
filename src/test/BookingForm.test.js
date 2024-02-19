import { render, screen } from "@testing-library/react";
import { BookingForm, BookingPage, Main } from "../components";
import { act } from "react-dom/test-utils";


test('Renders the BookingForm heading', () => {

    const availableTimes =  [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];

    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes function returns the correct expected value', () => {
  const expectedValue = []; // Replace this with the expected value
  const actualValue = BookingPage.prototype.initializeTimes();
  console.log("actualValue", actualValue);

  expect(actualValue).toEqual(expectedValue);
});

/*test('updateTimes function returns the same value provided in the state', () => {
  const stateValue = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]; // Replace this with the state value
  const selectedDate = '2023-01-01'; // Replace this with the selected date
  const expectedValue = stateValue;
  const actualValue = BookingPage.prototype.updateTimes(selectedDate);

  expect(actualValue).toEqual(expectedValue);
});*/