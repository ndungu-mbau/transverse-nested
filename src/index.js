/* eslint-disable no-nested-ternary */
const transverse = (obj, prop) => {
  const propList = prop.split('.');
  const final = propList.reduce((val, curr) => (val !== undefined ? val[curr] : typeof val !== 'object' ? undefined : {}), obj);

  return final;
};


export default transverse;
