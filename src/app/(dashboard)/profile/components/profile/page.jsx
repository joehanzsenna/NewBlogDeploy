'use client'

import React from "react";
import Image from "next/image";
import ellipse from "@/assets/ellipse.png";
import Link from "next/link";
import TabsComponent from "./TabsComponent";
import Publish from "./publish/page";
import Draft from "./draft/page";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <p>Loading...</p>
}

if (status === 'unauthenticated') {
    router.replace("/");
    return null
  }

  return (
    <div className="w-full md:max-w-[1440px] border-t border-[#26BDD2] ">
      <div className="w-[90%] md:w-[85%] mx-auto h-[auto] flex md:flex-row flex-col items-center py-10 gap-x-6">
        <div className="w-[4rem] md:w-[228px] ">
          <Image className="w-full" src={ellipse} alt="profile-image" />
        </div>
        <div className="w-full flex flex-col md:flex-row items-baseline">
          <div className="w-full">
            {!session ? (
              <>
              <h1 className="font-semibold text-3xl text-center md:text-left pt-4 md:pt-0 mb-3">
              Jane Doe
             </h1>
              </>
            ) : (
              <>
              <h1 className="font-semibold text-3xl text-center md:text-left pt-4 md:pt-0 mb-3">
              {session.user?.email}
            </h1>
            </>
            )}
            <p className="w-full md:w-[607px]  text-center md:text-start md:ml-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              dolore! Qui ratione fuga distinctio facere ipsum natus praesentium
              rerum laboriosam dolor consequatur, adipisci nisi perspiciatis
              nemo cupiditate mollitia voluptatum beatae veniam consequuntur
              expedita maiores quas.
            </p>
            <div className="mt-2 flex gap-3 pt-5 md:pt-0">
              <span className="text-[12px]">15,000 views</span>
              <span className="text-[12px]">60 Published</span>
            </div>
          </div>
          <button className="md:mx-auto border border-[2px #26BDD2] px-3 rounded-md mt-5 md:mt-0">
            Edit
          </button>
        </div>
      </div>

      <div className="w-[90%] md:w-[85%] mx-auto mb-1 ">
        <div className="px-[1.5rem]">
          <TabsComponent items={items}/>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-5 mb-10 ">
        <h1 className="text-[#808080] font-bold">Previous</h1>
        <ul className="flex items-center justify-center gap-2 text-[#808080]">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <h1 className="font-bold">Next</h1>
      </div>
    </div>
  );
}


const items = [
  {
    id: 0,
    title: 'Published',
    content: (<Publish/>),
  },
  {
    id: 1,
    title: 'Draft',
    content: (<Draft/> ),
  },
]