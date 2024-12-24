import Link from "next/link"

async function Post(){
    
  const apiUrl = await fetch("https://jsonplaceholder.typicode.com/posts");
  const get = await apiUrl.json();

    return(
        <>
          {get.map((po:any)=>(
            <>
            <div className="">
                <Link href={`/post/${po.id}`}>
                     <span className="text-xl font-medium"> &nbsp; {po.id} : &nbsp; post</span> <br />
                </Link>
            </div>
            
            </>
        ))}
        </>
    )
}

export default Post