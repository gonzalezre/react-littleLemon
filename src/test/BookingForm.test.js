import { fireEvent, getAllByAltText, getByAltText, render, screen } from "@testing-library/react";
import { BookingForm, BookingPage, Main } from "../components";
import { act } from "react-dom/test-utils";
import { useReducer } from "react";


test('Renders the BookingForm heading', () => {

  const seedRandom = (seed) => {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return (s = s * a % m) /m;
    }
  }

  const fetchAPI = (date) => {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() > 0.5) {
        result.push(i+ ':30');
      }
    }
    return result;
  }

  const updateTimes = (state, date) => {
    return {availableTimes: fetchAPI(new Date())};
  }

  const initialState = {availableTimes: fetchAPI(new Date())};

    const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed')
    }
  }

  const submitAPI = (formData) => {
    return true;
  }

    render(<BookingForm availableTimes={initialState} dispatch={updateTimes} submitForm={submitForm} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

test('should validate form correctly', () => {
  const seedRandom = (seed) => {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return (s = s * a % m) /m;
    }
  }

  const fetchAPI = (date) => {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() > 0.5) {
        result.push(i+ ':30');
      }
    }
    return result;
  }

  const updateTimes = (state, date) => {
    return {availableTimes: fetchAPI(new Date())};
  }

  const initialState = {availableTimes: fetchAPI(new Date())};

    const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed')
    }
  }

  const submitAPI = (formData) => {
    return true;
  }

  const { getByLabelText, getByText } = render(<BookingForm availableTimes={initialState} dispatch={updateTimes} submitForm={submitForm} />);

  // Test with valid data
  fireEvent.change(getByLabelText('Choose date'), { target: { value: '20/02/2024' } });
  fireEvent.change(getByLabelText('Choose time'), { target: { value: '17:00' } });
  fireEvent.click(getByText('Make Your reservation'));
  // Assert your submit logic or redirection

  // Test with invalid data
  //fireEvent.change(getByLabelText('Email:'), { target: { value: 'invalid-email' } });
  //fireEvent.change(getByLabelText('Password:'), { target: { value: 'invalid' } });
  //fireEvent.click(getByText('Submit'));
  // Assert your validation error logic
});

// test('initializeTimes function returns the correct expected value', () => {
//   const expectedValue = []; // Replace this with the expected value
//   const actualValue = BookingPage.prototype.initializeTimes();
//   console.log("actualValue", actualValue);

//   expect(actualValue).toEqual(expectedValue);
// });

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