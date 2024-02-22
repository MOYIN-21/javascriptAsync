const getTodos = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/');

    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }
     const data = await response.json();
     return data;
 };
  
 getTodos()
     .then(data => console.log("resolved", data))
     .catch(err => console.log('error:', err.message));
 

 
