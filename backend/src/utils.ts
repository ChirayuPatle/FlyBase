import fs from 'fs';
import path from 'path';

export const generate = (): string => {
  const subset = '123456789qwertyuiopasdfghjklzxcvbnm';
  const length = 5;
  let id = '';
  for (let i = 0; i < length; i++) {
    id += subset[Math.floor(Math.random() * length)];
  }
  return id;
};

export const getAllFiles = (folderPath: string) => {
  let response: string[] = [];
  const allFileAndFolder = fs.readdirSync(folderPath, 'utf-8');

  allFileAndFolder.forEach((file) => {
    if (file === '.git') {
      return;
    }

    const fullFilePath = path.join(folderPath, file);
    if (fs.statSync(fullFilePath).isDirectory()) {
      response = response.concat(getAllFiles(fullFilePath));
    } else {
      response.push(fullFilePath);
    }
  });
  return response;
};
