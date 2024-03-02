"use client";

import { BASE_API_URL } from "@/Utils/constants";
import del from "@/assets/delete.png"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removePublished = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`${BASE_API_URL}/api/published?id=${id}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
       return router.refresh();
      }
    }
  };

  return (
   <div className="flex gap-2" onClick={removePublished}>
     <Image className="w-[12px] h-[12px] cursor-pointer" src={del} alt="del" width={200} height={200} />
    <span className="text-[10px] cursor-pointer">Delete</span>
   </div>
  );
}
