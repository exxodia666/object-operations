import { CheckResult, IteratedObject } from "./type";
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

function checkObjects<T, K>(obj1: T, obj2: K) {
  const [arr1, arr2] = [deepIteration(obj1), deepIteration(obj2)]
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][1] !== arr2[i][1]) {
      return false
    } else {
      continue
    }
  }
  return true
}


function deepClone(object: any, result: any = {}) {
  for (let key in object) {
    if (typeof object[key] === 'object') {
      result[key] = deepClone(object[key])
    } else {
      result[key] = object[key]
    }
  }
  return result
}

const initialObject = {
  color: 'white',
  isValid: true,
  size: {
    width: 10,
    height: 10,
    block: {
      isValid: true,
      width: 30,
      height: 30
    }
  }
}

const clonedObj = deepClone(initialObject)

test()
