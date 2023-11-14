async function getUsers(id){
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}

export default async function  Page({params}){
    const userData = await getUsers(params.userId)
    return(
        <div>
            <h2>User Details - {userData.id}</h2>
            <h4>Name: {userData.name}</h4>
            <h4>Age: {userData.age}</h4>
            <h4>Email: {userData.email}</h4>
        </div>
    )
}