import Link from "next/link"

async function Todos(){
    
  const apiUrl = await fetch("https://jsonplaceholder.typicode.com/todos");
  const get = await apiUrl.json();

    return(
        <>
        {get.map((tod:any)=>(
            <>
            <div className="">
                <Link href={`/todos/${tod.id}`}>
                     <span className="text-xl font-medium"> &nbsp; {tod.id} : &nbsp; TODOS</span> <br />
                </Link>
            </div>
            </>
        ))}
        </>
    )
}

export default Todos