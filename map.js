const arrFor = [1,2,4];


Array.prototype.customMap = function(callback) {
    arr = [];
    for (let i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};

let check = arrFor.customMap(function (num) {
    return num*num;
});

console.log(check);