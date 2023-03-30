import { body } from "express-validator";
import * as bcrypt from 'bcrypt';

import LOGGER from "../logger.js";


export const validateAdminForm = () => {
  return [
    body('username')
      .isLength({ min: 4 })
      .withMessage('username must be at least 4 chars long')
      .isLength({ max: 16 })
      .withMessage('username must be less than 12 chars long')
      .exists()
      .withMessage('username is required')
      .trim()
      .escape(),
    body('password')
      .isLength({ min: 5 })
      .withMessage('password must be at least 5 chars long')
      .isLength({ max: 30 })
      .withMessage('password must be at max 30 chars long')
      .exists(),
  ];
}

export const validatePassword = async (hashedPassword, pass) => {
  try {
    return await bcrypt.compare(pass, hashedPassword);
  } catch (err) {
    LOGGER.warn(`Error validating Admin password ${err}`);
  }
}