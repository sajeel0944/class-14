async function photosdy({ params }: { params: { photosdy: string } }){
    const apiUrl = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.photosdy}`);
    const get = await apiUrl.json();
   
    return(
        <>
                <div className="pl-2 mt-5">
                    <span><span className="font-semibold">albumId :</span>  {get.albumId}</span> <br /> <br />
                    <span><span className="font-semibold"> id :</span>  {get.id}</span> <br /> <br />
                    <h1><span className="font-semibold">Title :</span>   {get.title}</h1> <br />
                    <p><span className="font-semibold">url :</span>   {get.url}</p> <br /> <br />
                    <p><span className="font-semibold">thumbnailUrl :</span>   {get.thumbnailUrl}</p>
                </div>

                <h2 className="mt-16 text-center font-bold text-2xl">CONVERT INTO CAPITAL</h2>

                <div className="pl-2 mt-9">
                    <span><span className="font-semibold">albumId :</span>  {get.albumId}</span> <br /> <br />
                    <span><span className="font-semibold"> id :</span>  {get.id}</span> <br /> <br />
                    <h1><span className="font-semibold">Title :</span>   {get.title.toUpperCase()}</h1> <br />
                    <p><span className="font-semibold">url :</span>   {get.url}</p> <br /> <br />
                    <p><span className="font-semibold">thumbnailUrl :</span>   {get.thumbnailUrl}</p>
                </div>

        </>
    )
}

export default photosdy