"use client"

import Link from "next/link"


export default async function Home() {

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

    </>
  );
}
