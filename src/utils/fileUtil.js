import { promises as fs } from 'fs';

import LOGGER from './logger.js';


export const readFile = async (filePath, encoding) => {
  try {
    return await fs.readFile(filePath, encoding ? encoding : 'utf8');
  } catch(err) {
    LOGGER.error(`Could not read file at path ${filePath}, \n${err}`);
  }
}


export const readJSONFile = async (filePath, encoding) => {
  try {
    return JSON.parse((await fs.readFile(filePath, encoding ? encoding : 'utf8')).toString());
  } catch(err) {
    LOGGER.error(`Could not read file at path ${filePath}, \n${err}`);
  }
}