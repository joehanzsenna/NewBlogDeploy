import React from "react";
import { profileData } from "../ProfileDb";
import PublishedList from "../../publishedLists/PublishedList";
import { BASE_API_URL } from "@/Utils/constants";

const getPublishedBlog = async () => {
  const res = await fetch(`${BASE_API_URL}/api/published`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch published Blogs");
  }

  return await res.json();
}

export default async function Publish() {
  const { publishedBlog } = await getPublishedBlog();

  // if(!BASE_API_URL){
  //   return null
  // }
  return (
    <div>
      <div>
        {publishedBlog.map((p) => (
          <div
            key={p._id}
            className="w-full mx-auto"
          >
            <PublishedList
              img={p.tagImage}
              readtime={p.readtime}
              title={p.title}
              beauty={p.tag}
              href={`/Published/components/editBlog/${p._id}`}
              removeId={p._id}
              story={p.story}
            />
          </div>
        ))}
      </div>

      {profileData.map((pro) => (
        <div key={pro.id}>
          <PublishedList
            img={pro.img}
            views={pro.views}
            beauty={pro.beauty}
            title={pro.title}
            story={pro.story}
          />
        </div>
      ))}
    </div>
  );
}


