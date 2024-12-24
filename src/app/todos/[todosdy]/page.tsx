async function Todosdy({ params }: { params: { todosdy: string } }){
    const apiUrl = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todosdy}`);
    const get = await apiUrl.json();

    return(
        <>
                <div className="pl-2 mt-5">
                    <span><span className="font-semibold">userId :</span>  {get.userId}</span> <br /> <br />
                    <span><span className="font-semibold"> id :</span>  {get.id}</span> <br /> <br />
                    <h1><span className="font-semibold">Todos :</span>   {get.title}</h1> <br />
                    <p><span className="font-semibold">completed :</span>   {get.completed.toString()}</p>
                </div>

                <h2 className="mt-16 text-center font-bold text-2xl">CONVERT INTO CAPITAL</h2>

                <div className="pl-2 mt-5">
                    <span><span className="font-semibold">userId :</span>  {get.userId}</span> <br /> <br />
                    <span><span className="font-semibold"> id :</span>  {get.id}</span> <br /> <br />
                    <h1><span className="font-semibold">Todos :</span>   {get.title.toUpperCase()}</h1> <br />
                    <p><span className="font-semibold">completed :</span>   {get.completed.toString()}</p>
                </div>

        </>
    )
}

export default Todosdy