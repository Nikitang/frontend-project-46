const space = ' ';
const spaceSize = 4;
const defaultSpace = (depth) => space.repeat(spaceSize * depth - 2);
const braceSpace = (depth) => space.repeat(spaceSize * depth - spaceSize);

const joinStrings = (lines, depth) => ['{', ...lines, `${braceSpace(depth)}}`].join('\n');

const stringify = (data, depth) => {
  if ((typeof data !== 'object') || (data === null)) {
    return String(data);
  }
  const keys = Object.keys(data);
  const lines = keys.map((key) => `${defaultSpace(depth)}  ${key}: ${stringify(data[key], depth + 1)}`);
  return joinStrings(lines, depth);
};

const makeStylish = (tree) => {
  const iter = (obj, depth) => {
    switch (obj.type) {
      case 'root': {
        const result = obj.children.flatMap((child) => iter(child, depth));
        return joinStrings(result, depth);
      }
      case 'nested': {
        const childrenToString = obj.children.flatMap((child) => iter(child, depth + 1));
        return `${defaultSpace(depth)}  ${obj.key}: ${joinStrings(childrenToString, depth + 1)}`;
      }
      case 'added': {
        return `${defaultSpace(depth)}+ ${obj.key}: ${stringify(obj.value, depth + 1)}`;
      }
      case 'removed': {
        return `${defaultSpace(depth)}- ${obj.key}: ${stringify(obj.value, depth + 1)}`;
      }
      case 'changed': {
        return [`${defaultSpace(depth)}- ${obj.key}: ${stringify(obj.oldValue, depth + 1)}`,
          `${defaultSpace(depth)}+ ${obj.key}: ${stringify(obj.newValue, depth + 1)}`];
      }
      case 'unchanged': {
        return `${defaultSpace(depth)}  ${obj.key}: ${stringify(obj.value, depth + 1)}`;
      }
      default: {
        throw Error('Incorrect data');
      }
    }
  };
  return iter(tree, 1);
};

export default makeStylish;
