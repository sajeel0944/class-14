import Link from "next/link"

async function Photos(){
    
  const apiUrl = await fetch("https://jsonplaceholder.typicode.com/Photos");
  const get = await apiUrl.json();

    return(
        <>
        {get.map((pho:any)=>(
            <>
            <div className="">
                <Link href={`/photos/${pho.id}`}>
                     <span className="text-xl font-medium"> &nbsp; {pho.id} : &nbsp; Photos</span> <br />
                </Link>
            </div>
            </>
        ))}
        </>
    )
}

export default Photos