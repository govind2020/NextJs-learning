import ServiceApi from "../../../../services/getUser"

 const Page = async (props) => {
    const userData = ServiceApi();
    const users = await userData;
    const currentId = props.params.userId;
    const user = users[currentId-1]
    console.log(users[currentId]);
  return (
    <div>
        <h1>User Detail Page</h1>
        <h2>User Id:- {user.id}</h2>
        <h2>User Name:- {user.name}</h2>
        <h2>User Email:- {user.email}</h2>
    </div>
  )
}

export default Page

export async function generateStaticParams(){
    const getUserList = ServiceApi();
    const users = await getUserList;
    return users.map(user => ({
        userId : user.id.toString()
    }))
}