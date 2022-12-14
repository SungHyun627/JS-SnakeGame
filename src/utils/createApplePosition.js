import { BOARD_ROW_LENGTH } from '../constants/constants.js';
import { comparePos } from './getPositions.js';

const getRandom = () => Math.floor(Math.random() * BOARD_ROW_LENGTH);

export const createApplePos = (snakeState) => {
  const applePos = { x: getRandom(), y: getRandom() };
  if (snakeState.some((snakePos) => comparePos(snakePos, applePos)))
    return createApplePos(snakeState);
  return applePos;
};
