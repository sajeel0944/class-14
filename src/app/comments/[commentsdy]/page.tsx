async function PostDy({ params }: { params: { commentsdy: string } }){
    const apiUrl = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentsdy}`);
    const get = await apiUrl.json();
   
    return(
        <>
                <div className="pl-2 mt-5">
                    <span><span className="font-semibold">Post id :</span>  {get.postId}</span> <br /> <br />
                    <span><span className="font-semibold"> id :</span>  {get.id}</span> <br /> <br />
                    <h1><span className="font-semibold">Name :</span>   {get.name}</h1> <br />
                    <p><span className="font-semibold">Email :</span>   {get.email}</p> <br /> <br />
                    <p><span className="font-semibold">Comments :</span>   {get.body}</p>
                </div>

                <h2 className="mt-16 text-center font-bold text-2xl">CONVERT INTO CAPITAL</h2>

                <div className="mt-12 pl-2">
                    <span><span className="font-semibold">Post id :</span>  {get.postId}</span> <br /> <br />
                    <span><span className="font-semibold"> id :</span>  {get.id}</span> <br /> <br />
                    <h1><span className="font-semibold">Name :</span>   {get.name.toUpperCase()}</h1> <br />
                    <p><span className="font-semibold">Email :</span>   {get.email.toUpperCase()}</p> <br /> <br />
                    <p><span className="font-semibold">Comments :</span>   {get.body.toUpperCase()}</p>
                </div>
        </>
    )
}

export default PostDy