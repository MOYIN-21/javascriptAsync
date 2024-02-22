const getTodos = async ()=>{
   const response = await fetch('https://jsonplaceholder.typicode.com/albums/');
    const data = await response.json();
    return data;
};

console.log(1);
console.log(2);
console.log(3);
 
getTodos()
    .then(data => console.log("resolved", data));

console.log(4);
console.log(5);
console.log(6);

// fetch('https://jsonplaceholder.typicode.com/albums/').then((response)=>{
//     console.log('resolved', response);
//     return response.json();
// }).then(data =>{
//     console.log(data);
// }).catch((err)=>{
//     console.log('rejected', err)
// });