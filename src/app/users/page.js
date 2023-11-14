import Link from "next/link";
import DeleteUser from "../util/DeleteUser";
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
                        <div className="user-items">
                            <span>
                                <Link href={`users/${item.id}`} >Name:- {item.name}</Link>
                            </span>
                            <span >
                                <Link href={`users/${item.id}/update`} >Edit</Link>
                            </span>
                            <span >
                                {/* <DeleteUser id={item.id}/> */}
                            </span> 
                         </div>   
                    )
                })
            }
        </div>
    )
}