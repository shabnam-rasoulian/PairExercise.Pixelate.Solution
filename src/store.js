import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const initialState = {
  grid: [Array(20).fill('')],
  selectedColor: 'red',
};

// ACTION TYPES
const ADD_ROW = 'ADD_ROW';
const PICK_COLOR = 'PICK_COLOR';
const COLORIZE = 'COLORIZE';

// ACTION CREATORS
export const addRow = () => {
  return {
    type: ADD_ROW,
  };
};

export const pickColor = color => {
  return {
    type: PICK_COLOR,
    color,
  };
};

export const colorize = (row, col) => {
  return {
    type: COLORIZE,
    row,
    col,
  };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,
        grid: [...state.grid, Array(state.grid[0].length).fill('')],
      };
    case PICK_COLOR:
      return {
        ...state,
        selectedColor: action.color,
      };
    case COLORIZE:
      let colorGrid = [...state.grid];
      colorGrid[action.row] = [...colorGrid[action.row]];
      colorGrid[action.row][action.col] = state.selectedColor;
      return {
        ...state,
        grid: colorGrid,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
