import Link from "next/link"

async function Albums(){
    
  const apiUrl = await fetch("https://jsonplaceholder.typicode.com/albums");
  const get = await apiUrl.json();

    return(
        <>
        {get.map((alb:any)=>(
            <>
            <div className="">
                <Link href={`/albums/${alb.id}`}>
                     <span className="text-xl font-medium"> &nbsp; {alb.id} : &nbsp; ALBUMS</span> <br />
                </Link>
            </div>
            </>
        ))}
        </>
    )
}

export default Albums