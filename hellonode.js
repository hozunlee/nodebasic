// import { dirname } from "path";

// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// export { __filename, __dirname };

// console.log(__dirname);

// console.log("global :>> ", global);

// const filepath = path.join(__dirname, "nodeutils.js");
// console.log(path.isAbsolute(__filename));

// import os from "os";
// console.log(os.cpus());
// console.log(os.version());

// console.log(os.hostname());

// 다음과 같이 ESM에서 __dirname, __filename을 사용할 수 있도록 nodeutils.js를 작성하시오.

import { __ } from "./nodeutils.js";
console.log("__ :>> ", __);
const { __dirname, __filename } = __(import.meta.url);

console.log(__dirname);
console.log(__filename);

// 출력 결과
// /Users/jade/workspace/fpp/nodebasic
// /Users/jade/workspace/fpp/nodebasic/hellonode.js
