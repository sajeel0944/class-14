async function Usersdy({ params }: { params: { usersdy: string } }){
    const apiUrl = await fetch(`https://jsonplaceholder.typicode.com/users/${params.usersdy}`);
    const get = await apiUrl.json();

    return(
        <>
                <div className="pl-2 mt-5">
                    <span><span className="font-semibold"> id :</span>  {get.id}</span> <br /> <br />
                    <h1><span className="font-semibold">Name :</span>   {get.name}</h1> <br />
                    <h1><span className="font-semibold">User Name :</span>   {get.username}</h1> <br />
                    <h1><span className="font-semibold">Email :</span>   {get.email}</h1> <br />
                    <h1><span className="font-semibold">Street :</span>   {get.address.street}</h1> <br />
                    <h1><span className="font-semibold">Suite :</span>   {get.address.suite}</h1> <br />
                    <h1><span className="font-semibold">City :</span>   {get.address.city}</h1> <br />
                    <h1><span className="font-semibold">Zipcode :</span>   {get.address.zipcode}</h1> <br />
                    <h1><span className="font-semibold">Lat :</span>   {get.address.geo.lat}</h1> <br />
                    <h1><span className="font-semibold">Lng :</span>   {get.address.geo.lng}</h1> <br />
                    <h1><span className="font-semibold">Phone :</span>   {get.phone}</h1> <br />
                    <h1><span className="font-semibold">Website :</span>   {get.website}</h1> <br />
                    <h1><span className="font-semibold">Company Name :</span>   {get.company.name}</h1> <br />
                    <h1><span className="font-semibold">Catch Phrase :</span>   {get.company.catchPhrase}</h1> <br />
                    <h1><span className="font-semibold">Company BS :</span>   {get.company.bs}</h1> <br />

                </div>

                <h2 className="mt-16 text-center font-bold text-2xl">CONVERT INTO CAPITAL</h2>

                <div className="pl-2 mt-5">
                    <span><span className="font-semibold"> id :</span>  {get.id}</span> <br /> <br />
                    <h1><span className="font-semibold">Name :</span>   {get.name.toUpperCase()}</h1> <br />
                    <h1><span className="font-semibold">User Name :</span>   {get.username.toUpperCase()}</h1> <br />
                    <h1><span className="font-semibold">Email :</span>   {get.email}</h1> <br />
                    <h1><span className="font-semibold">Street :</span>   {get.address.street.toUpperCase()}</h1> <br />
                    <h1><span className="font-semibold">Suite :</span>   {get.address.suite}</h1> <br />
                    <h1><span className="font-semibold">City :</span>   {get.address.city.toUpperCase()}</h1> <br />
                    <h1><span className="font-semibold">Zipcode :</span>   {get.address.zipcode}</h1> <br />
                    <h1><span className="font-semibold">Lat :</span>   {get.address.geo.lat}</h1> <br />
                    <h1><span className="font-semibold">Lng :</span>   {get.address.geo.lng}</h1> <br />
                    <h1><span className="font-semibold">Phone :</span>   {get.phone}</h1> <br />
                    <h1><span className="font-semibold">Website :</span>   {get.website}</h1> <br />
                    <h1><span className="font-semibold">Company Name :</span>   {get.company.name.toUpperCase()}</h1> <br />
                    <h1><span className="font-semibold">Catch Phrase :</span>   {get.company.catchPhrase.toUpperCase()}</h1> <br />
                    <h1><span className="font-semibold">Company BS :</span>   {get.company.bs.toUpperCase()}</h1> <br />

                </div>

              
        </>
    )
}

export default Usersdy