Array.prototype.newMap = newMap

function newMap(f)
{
    arr = []
    for(var i = 0; i < this.length;i++)
    {
        arr.push(f(this[i]))
    }
    return arr
}
function f(x)
{
    return x*2
}

let arry = [1,2,3,4]
const arr1 = arry.newMap(f)
console.log(arr1)