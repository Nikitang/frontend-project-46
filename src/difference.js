import _ from 'lodash';

const getDiff = (file1, file2) => {
    const file1Keys = Object.keys(file1);
    const file2Keys = Object.keys(file2);
    const sortFile = _.sortBy(_.union(file1Keys, file2Keys));
    const children = sortFile.map((key) => {
        if (!_.has(file1, key)) {
          return {
            type: 'added',
            key,
            value: file2[key],
          };
        }
        if (!_.has(file2, key)) {
          return {
            type: 'removed',
            key,
            value: file1[key],
          };
        }
        if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
          return {
            type: 'nested',
            key,
            children: buildAST(file1[key], file2[key]),
          };
        }
        if (_.isEqual(file1[key], file2[key])) {
          return {
            type: 'unchanged',
            key,
            value: file1[key],
          };
        }
        return {
          type: 'changed',
          key,
          oldValue: file1[key],
          newValue: file2[key],
        };
      });
      return children;
    };
    
    const getDifferenceTree = (file1, file2) => ({
      type: 'root',
      children: getDiff(file1, file2),
    });
    
    export default getDifferenceTree;