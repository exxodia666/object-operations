function test() {
    initialObject.size.block.height = 100;
    console.log(deepIteration(initialObject));
    console.log(deepIteration(clonedObj));
    console.log('Objects equal: ', checkObjects(initialObject, clonedObj));
}
function deepIteration(obj, array) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            deepIteration(obj[key], array);
        }
        else {
            array.push([key, obj[key]]);
        }
    }
    return array;
}
function checkObjects(obj1, obj2) {
       for (var i = 0; i < arr1.length; i++) {
        if (arr1[i][1] !== arr2[i][1]) {
            return false;
        }
        else {
            continue;
        }
    }
    return true;
}
function deepClone(object, result) {
    for (var key in object) {
        if (typeof object[key] === 'object') {
            result[key] = deepClone(object[key]);
        }
        else {
            result[key] = object[key];
        }
    }
    return result;
}
var initialObject = {
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
};
var clonedObj = deepClone(initialObject);
test();
