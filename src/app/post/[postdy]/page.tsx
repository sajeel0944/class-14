async function PostDy({ params }: { params: { postdy: string } }){
    const apiUrl = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postdy}`);
    const get = await apiUrl.json();

    return(
        <>
                <div className="mb-10 pl-2 mt-5">
                    <span> <span className="font-bold">user Id : </span>{get.userId}</span> <br /> <br />
                    <span> <span className="font-bold"> Id : </span>{get.id}</span> <br /> <br />
                    <h1> <span className="font-bold">TITLE : </span> {get.title}</h1> <br />
                    <p> <span className="font-bold">POST : </span>  {get.body}</p>
                </div>

                <h1 className="font-bold text-2xl text-center">CONVERT INTO CAPITAL</h1>

                <div className="mt-10 pl-2">
                    <span> <span className="font-bold">user Id : </span> {get.userId}</span> <br /> <br />
                    <span> <span className="font-bold"> Id : </span>{get.id}</span> <br /> <br />
                    <h1> <span className="font-bold">TITLE : </span> {get.title.toUpperCase()}</h1> <br />
                    <p> <span className="font-bold">POST : </span> {get.body.toUpperCase()}</p>
                </div>

        </>
    )
}

export default PostDy