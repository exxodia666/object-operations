function test() {
  initialObject.size.block.height = 100
  console.log(deepIteration(initialObject))
  console.log(deepIteration(clonedObj))
  console.log('Objects equal: ', checkObjects(initialObject, clonedObj))
}

function deepIteration<T>(
  obj: T | T[Extract<keyof T, string>],
  array: Array<[string, typeof obj[keyof typeof obj]]> = []
): Array<[string, typeof obj[keyof typeof obj]]> {
  for (let key in obj as Object) {
    if (typeof obj[key] === 'object') {
      deepIteration(obj[key], array)
    } else {
      array.push([key, obj[key]])
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
