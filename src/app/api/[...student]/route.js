
export async function GET(request,content){
    console.log(content);
    const studentDetails = content.params.student;
    console.log(studentDetails)
    return new Response("all routed catched");
}