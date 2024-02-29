import { expect, describe, test } from '@jest/globals';
import path from 'node:path';
import resultPlain from '../files/resultPlain.js';
import resultStylish from '../files/resultStylish.js';
import resultJson from '../files/resultJson.js';
import getDiff from '../index.js';
import parser from '../src/parsers.js';
import resultParse1 from '../files/resultParse1.js';
import resultParse2 from '../files/resultParse2.js';

const pathing = (filePath) => path.resolve(`${process.cwd()}/files/`, filePath);

describe('my beverage', () => {
  test('parser', () => {
    const getDate1 = pathing('file1.yaml');
    const getDate2 = pathing('file2.yaml');
    expect(parser(getDate1)).toEqual(resultParse1);
    expect(parser(getDate2)).toEqual(resultParse2);
  });

  test('getDiff', () => {
    expect(getDiff('file1.yaml', 'file2.yaml')).toEqual(resultStylish);
    expect(getDiff('file1.yaml', 'file2.yaml', 'plain')).toEqual(resultPlain);
    expect(getDiff('file1.yaml', 'file2.yaml', 'json')).toEqual(resultJson);
  });
});
