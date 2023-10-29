import Link from "next/link";
import ServiceApi from "../../../services/getUser"

 const Page = async () => {
    const userData = ServiceApi();
    const users = await userData;
    console.log(users)
  return (
    <div>
        <h2>USERS</h2>
        {
            users.map((item)=>{
                return (
                    <>
                    <h2 key={item.id} >
                        <Link href={`/users/${item.id}`} >{item.name}</Link>
                    </h2>
                    </>
                )
            })
        }
    </div>
  )
}

export default Page