"use Client"

export default function DeleteUser(props){
    const userId = props.id
    console.log(userId)
  
    const handleDelete = async() =>{
        let result = await fetch(`http://localhost:3000/api/users/${id}`,{
            method: "delete",
        });
        result = await result.json();
        if(result.success){
            alert("User Delete Successfully")
        }else{
            alert('Something Went Wrong!')
        }
    }
    
    return (
        <div>
            <button  onClick={handleDelete} >Delete User</button>
        </div>
    )
}