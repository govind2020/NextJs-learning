const GetUser =  async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users/')
        const resultData = await result.json();
        return resultData;   
}

export default GetUser
