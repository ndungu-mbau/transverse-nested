const transverse = (obj, prop) => {
  const propList = prop.split('.')
  const final = propList.reduce((val, curr) => {
      return val !== undefined ? val[curr] : typeof val !== 'object' ? undefined : {}
  },obj)

  return final
}


export default transverse
