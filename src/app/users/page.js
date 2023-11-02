import Link from "next/link";

async function getUsers(){
    let data = await fetch('http://localhost:3000/api/users');
    data = await data.json();
    return data;
}
export default async function Page(){
    let userData = await getUsers()
    return(
        <div>
            <h1>User List</h1>
            {
                userData.map((item)=>{
                    return(
                        <div>
                            <div>UserId:- {item.id}</div>
                            <Link href={`users/${item.id}`} >Name:- {item.name}</Link>
                         </div>   
                    )
                })
            }
        </div>
    )
}