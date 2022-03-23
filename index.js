// Fetch API

const getTodo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json()
    console.log(data);

    let todoList = data.map((post) => {
        return `
        <h6>${post.title}</h6>
        
        `
    })
    document.querySelector('.container').innerHTML = todoList;
}

getTodo()