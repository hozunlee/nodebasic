import { dirname } from "path";
import { fileURLToPath } from "url";

// const __ = (fn) => {
//     const __filename = fileURLToPath(fn);
//     const __dirname = dirname(__filename);

//     const newObj = {
//         __filename,
//         __dirname,
//     };
//     return newObj;
// };

// export { __ };

//

export const __ = (fn) => {
    const __filename = fileURLToPath(fn);
    const __dirname = dirname(__filename);

    return {
        __filename,
        __dirname,
    };
};
