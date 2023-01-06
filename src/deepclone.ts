import { CheckResult, IteratedObject } from "./type.js";
//
export function deepIteration(
    obj: any,
    array: IteratedObject[] = [],
    path: string = 'root'
): IteratedObject[] {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            deepIteration(obj[key], array, `${path}.${key}`)
        } else {
            array.push({ path: `${path}.${key}`, value: obj[key] })
        }
    }
    return array
}
//
export function checkObjects<T, K>(obj1: T, obj2: K) {
    const result: CheckResult[] = []
    const [map1, map2] = [arrayToMap(deepIteration(obj1)), arrayToMap(deepIteration(obj2))]
    // step 1 - mapping
    map1.forEach((value1, key) => {
        const value2 = map2.get(key)
        if (value2 !== value1) {
            result.push({
                path: key,
                value1,
                value2
            })
            map2.delete(key)
        } else {
            map2.delete(key)
        }
    })
    // step2 - dof*king
    map2.forEach((value2, key) => {
        result.push({
            path: key,
            value1: undefined,
            value2
        })
    })
    return result
}
//
export function deepClone(object: any, result: any = {}) {
  for (let key in object) {
    if (typeof object[key] === 'object') {
      result[key] = deepClone(object[key])
    } else {
      result[key] = object[key]
    }
  }
  return result
}
//
function arrayToMap(array: IteratedObject[]): Map<string, any> {
    const result = new Map();
    array.forEach(element => result.set(element.path, element.value))
    return result
}