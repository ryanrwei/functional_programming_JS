function arrayMap(arr, fn) {
    let accumulator = 0;
    let arr_ = [];
    let res = arr.reduce( (accumulator, currentValue) => {
        arr_.push( fn(currentValue) );
        return arr_;
    }, accumulator);
    return res
}

module.exports = arrayMap