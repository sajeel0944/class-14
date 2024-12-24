async function PostDy({ params }: { params: { albumsdy: string } }){
    const apiUrl = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumsdy}`);
    const get = await apiUrl.json();
   
    return(
        <>
                <div className="pl-2 mt-5">
                    <span><span className="font-semibold">User id :</span>  {get.userId}</span> <br /> <br />
                    <span><span className="font-semibold"> id :</span>  {get.id}</span> <br /> <br />
                    <h1><span className="font-semibold">Title :</span>   {get.title}</h1> <br />
                </div>

                <h2 className="mt-16 text-center font-bold text-2xl">CONVERT INTO CAPITAL</h2>

                <div className="mt-12 pl-2">
                    <span><span className="font-semibold">User id :</span>  {get.userId}</span> <br /> <br />
                    <span><span className="font-semibold"> id :</span>  {get.id}</span> <br /> <br />
                    <h1><span className="font-semibold">Title :</span>   {get.title.toUpperCase()}</h1> <br />
                </div>
        </>
    )
}

export default PostDy