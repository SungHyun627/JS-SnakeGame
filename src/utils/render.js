import {
  $addSnakeClass,
  $addSnakeHeadClass,
  $removeHeadClass,
  $removeSnakeClass,
} from './mainpulateClass.js';
import { getDirectionName } from './controlSnake.js';
import { getCellDomElement } from './domSelector.js';

export const addSnakeCell = (target, state) => {
  console.log('Add Snake Cell');
  const snakePos = state.snakeQueue[0];
  const snakeCell = getCellDomElement(target, snakePos);
  $addSnakeClass(snakeCell);
};

export const addSnakeHeadCell = (target, state) => {
  console.log('Add Snake Head cell');
  const headPos = state.snakeQueue[0];
  const headCell = getCellDomElement(target, headPos);

  $addSnakeHeadClass(headCell, getDirectionName(state.direction));
};

export const removeSnakeHeadCell = (target, state) => {
  console.log('Remove Snake Head Cell');
  const preHeadPos = state.snakeQueue[1];
  const preHeadCell = getCellDomElement(target, preHeadPos);
  $removeHeadClass(preHeadCell);
};

export const removeSnakeCell = (target, state) => {
  console.log('Remove Snake Cell');
  const removedSnakePos = { ...state.removedSnakePos };
  const removedSnakeCell = getCellDomElement(target, removedSnakePos);
  $removeSnakeClass(removedSnakeCell);
};
