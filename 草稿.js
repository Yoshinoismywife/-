// const obj = {}
// var obj = {}
// var obj = new Object()
// function ojb(uname,age,sex)
// {
//     this.name = uname;
//     this.age = age;
//     this.sex = sex;
// }

// var mls = new ojb('米老鼠', 12, '男');

// var a

function add(a)
{
    switch(a)
    {
        case 1:
            console.log(2);
            break;
        case 2:
            console.log(3);
            break;
        case 3:
            console.log(4);
            break;
        case 4:
            console.log(5);
            break;
    }

}

for(var i = 1; i < 5; i++)
{
    add(i)
}

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