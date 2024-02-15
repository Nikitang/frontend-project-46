import parseData from '../dataParse.js';
import getDiff from '../src/getDiff.js';

describe('my beverage', () => {
  test('parseData', () => {
    expect(parseData('file1.json')).toEqual({
      host: 'hexlet.io',
      timeout: 50,
      proxy: '123.234.53.22',
      follow: false,
    });
  });

  test('gendiff', () => {
    const res = parseData('file1.json');
    const res2 = parseData('file2.json');
    expect(getDiff(res, res2)).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
  });
});
