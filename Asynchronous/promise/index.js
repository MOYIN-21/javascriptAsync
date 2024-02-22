const getTodos = (resource) => {
    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4){
                reject('error getting resource', err)
            } 
        });

        request.open('GET', resource);
        request.send();
    });
}
    
 getTodos('https://jsonplaceholder.typicode.com/photos/')
 .then(data =>{
    console,log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err)
});

// getTodos( ,(err, data) => {
//     console.log(data); 
//    getTodos('https://jsonplaceholder.typicode.com/todos/', (err, data)=>{
//     console.log(data);
//     getTodos('https://jsonplaceholder.typicode.com/albums/', (err, data) => {
//         console.log(data);
//     });

//    });
    
// });


 