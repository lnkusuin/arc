export const sleep = async (waitMillSec: number) => {
    return new Promise(function (resolve) {
        setTimeout(function() { resolve('') }, waitMillSec);
    });
}
