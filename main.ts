import { a1, b1, a2, b2, a3, b3, a4, b4, a5, b5 } from "./src/objects.js";
import { checkObjects } from "./src/deepclone.js";

function test() {
    console.log('FIRST')
    console.log(checkObjects(a1, b1))  // b1.size.width = 100
    console.log('SECOND')
    console.log(checkObjects(a2, b2)) // skipped b2.size.width
    console.log('THIRD')
    console.log(checkObjects(a3, b3)) // skipped a3.size.block.width
    console.log('FOURTH')
    console.log(checkObjects(a4, b4)) // skipped a4.size.height and skipped b4.size.block.height
    console.log('FIFTH')
    console.log(checkObjects(a5, b5)) // equal
}

test()