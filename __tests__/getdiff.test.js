import {describe, test, expect} from '@jest/globals';
import parseData from '../dataParse.js';

describe('my beverage', () => {

    test('gendiff', () => {
        const res = parseData(file1);
        const res2 = parseData(file2);
        expect(getDiff(res, res2)).toEqual(`{
            - follow: false
            host: hexlet.io
            - proxy: 123.234.53.22
            - timeout: 50
            + timeout: 20
            + verbose: true}`)
    });
});
