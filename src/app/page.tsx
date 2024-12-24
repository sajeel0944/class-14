"use client"

import Link from "next/link"

import Image from "next/image";
import {client} from "@/sanity/lib/client"

export default async function Home() {
  // use sanity
  const query = `*[ _type == "pet"]`;
  const pet = await client.fetch(query);


  const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users");
  const get = await apiUrl.json();

  return (
    <>
      <div className=" w-full  h-[670px] flex items-center px-2 sm:px-8 md:px-12 lg:px-28">
        <div className="h-[450px] w-full">
          <ul className="space-y-3">
            <li className=" w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d5ff]">
              <span className="text-2xl font-semibold text-center">post</span>
              <Link href={"/post"}>
              <span className="text-2xl cursor-pointer ">show</span>
              </Link>
            </li>
            <li className=" w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d5ff]">
              <span className="text-2xl font-semibold text-center">comments</span>{" "}
              <Link href={"/comments"}>
              <span className="text-2xl cursor-pointer ">show</span>
              </Link>            
              </li>
            <li className=" w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d5ff]">
              <span className="text-2xl font-semibold text-center">albums</span>{" "}
              <Link href={"/albums"}>
              <span className="text-2xl cursor-pointer ">show</span>
              </Link>                
              </li>
            <li className=" w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d5ff]">
              <span className="text-2xl font-semibold text-center">photos</span>{" "}
              <Link href={"/photos"}>
              <span className="text-2xl cursor-pointer ">show</span>
              </Link>              
              </li>
            <li className=" w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d5ff]">
              <span className="text-2xl font-semibold text-center">todos</span>{" "}
              <Link href={"/todos"}>
              <span className="text-2xl cursor-pointer ">show</span>
              </Link>             
              </li>
            <li className=" w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d5ff]">
              <span className="text-2xl font-semibold text-center">users</span>{" "}
              <Link href={"/users"}>
              <span className="text-2xl cursor-pointer ">show</span>
              </Link>              
              </li>
          </ul>
        </div>
      </div>

      {/* <h1>post</h1>
      <h1>comments</h1>
      <h1>albums</h1>
      <h1>photos</h1>
      <h1>todos</h1>
      <h1>users</h1> */}
      {/* {get.map((aa:any)=>(
        <>
        <div>
          <span>{aa.id}</span>  .
          <span> name {aa.name}</span>
        </div>

        <div>
          <span>{aa.id}</span>  .
          <span> username: {aa.username}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span> email: {aa.email}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span>address.street:  {aa.address.street}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span> address.suite: {aa.address.suite}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span> address.city:  {aa.address.city}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span> address.zipcode: {aa.address.zipcode}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span> address.geo.lat: {aa.address.geo.lat} .... address.geo.lng:  {aa.address.geo.lng}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span> phone: {aa.phone}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span> website: {aa.website}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span> company.name: {aa.company.name}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span> company.catchPhrase:  {aa.company.catchPhrase}</span>
        </div>
        <div>
          <span>{aa.id}</span>  .
          <span> company.bs:  {aa.company.bs}</span>
        </div>
        </>
      ))} */}
    </>
  );
}
