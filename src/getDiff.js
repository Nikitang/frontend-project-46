import _ from 'lodash';

const getDiff = (file1, file2) => {
    const file1Keys = Object.keys(file1);
    const file2Keys = Object.keys(file2);
    const sortFile = _.sortBy(_.union(file1Keys, file2Keys));

    const result = [];

    sortFile.forEach((key) => {
      if (!Object.hasOwn(file2, key)) {
        result.push(`  - ${key}: ${file1[key]}`);
      } else if (!Object.hasOwn(file1, key)) {
        result.push(`  + ${key}: ${file2[key]}`);
      } else if (file1[key] !== file2[key]) {
        result.push(`  - ${key}: ${file1[key]}`);
        result.push(`  + ${key}: ${file2[key]}`);
      } else {
        result.push(`    ${key}: ${file1[key]}`);
      }
    });
    return `{\n${result.join('\n')}\n}`;
}

export default getDiff;