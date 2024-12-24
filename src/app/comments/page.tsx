import Link from "next/link"

async function Post(){
    
  const apiUrl = await fetch("https://jsonplaceholder.typicode.com/comments");
  const get = await apiUrl.json();

    return(
        <>
        {get.map((pos:any)=>(
            <>
            <div className="">
                <Link href={`/comments/${pos.id}`}>
                     <span className="text-xl font-medium"> &nbsp; {pos.id} : &nbsp; COMMENTS</span> <br />
                </Link>
            </div>
            </>
        ))}
        </>
    )
}

export default Post