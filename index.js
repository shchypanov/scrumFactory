// 1

let myObject = {
  name: 'Dima',
  age: 34,
  hair: 'brown'
};

// 2

function getName(obj) {
  return obj.name;
}

console.log(getName(myObject));

// 3

let myArray = [1, 2, 3, 4, 5];

// 4

function getArray(arr) {
  for (let i = 0, length = arr.length; i < length; i++) {
    console.log(arr[i]);
  }
}

getArray(myArray);

// or

myArray.forEach(function (i) {
  document.write(`${i} `)
});

// 5

for (let i = 1; i < 101; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  }
  else if (i % 3 === 0) {
    console.log('Fizz');
  }
  else if (i % 5 === 0) {
    console.log('Buzz');
  }
  else  {
    console.log(i);
  }
}