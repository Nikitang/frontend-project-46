import { parseData, parseYaml } from '../Parsers.js'; 
import getDiff from '../src/getDiff.js';
import path from 'node:path';
const pathing = path.resolve(`${process.cwd()}/files/`, 'file1.json');
const pathing3 = path.resolve(`${process.cwd()}/files/`, 'file2.json');
const pathing2 = path.resolve(`${process.cwd()}/files/`, 'file1.yml');
const pathing4 = path.resolve(`${process.cwd()}/files/`, 'file2.yml');
console.log(pathing, process.cwd());
describe('my beverage', () => {

  test('parseData', () => {
    expect(parseData(pathing)).toEqual({
      host: 'hexlet.io',
      timeout: 50,
      proxy: '123.234.53.22',
      follow: false,
    });
  });

  test('parseYaml', () => {
    expect(parseYaml(pathing2)).toEqual({
      "host": "hexlet.io",
      "timeout": 50,
      "proxy": "123.234.53.22",
      "follow": false,
      })
  })

  test('gendiff', () => {
    const res = parseData(pathing);
    const res2 = parseData(pathing3);
    expect(getDiff(res, res2)).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
    const yml1 = parseYaml(pathing2);
    const yml2 = parseYaml(pathing4);
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
