import Link from "next/link"

async function Users(){
    
  const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users");
  const get = await apiUrl.json();

    return(
        <>
        {get.map((tod:any)=>(
            <>
            <div className="">
                <Link href={`/users/${tod.id}`}>
                     <span className="text-xl font-medium"> &nbsp; {tod.id} : &nbsp; TODOS</span> <br />
                </Link>
            </div>
            </>
        ))}
        </>
    )
}

export default Users