const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            console.log(undefined, data);
        } else if (request.readyState === 4){
            console.log('could not fetch data', undefined)
        } 
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};


getTodos((data) => {
    console.log('callback fired'); 
   getTodos('https://jsonplaceholder.typicode.com/todos/', (err, data)=>{
    console.log(data);
   })
    
});


 