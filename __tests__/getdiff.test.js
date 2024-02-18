import { parseData, parseYaml } from '../Parsers.js'; 
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

  test('parseYaml', () => {
    expect(parseYaml('file1.yml')).toEqual({
      "host": "hexlet.io",
      "timeout": 50,
      "proxy": "123.234.53.22",
      "follow": false,
      })
  })

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
    const yml1 = parseYaml('file1.yml');
    const yml2 = parseYaml('file2.yml');
    expect(getDiff(yml1, yml2)).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`)
  });
});
