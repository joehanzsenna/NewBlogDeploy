"use client";

import { BASE_API_URL } from "@/Utils/constants";
import del from "@/assets/delete.png"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removePublished = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`${BASE_API_URL}/api/draft?id=${id}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        toast('deleted successfully')
        router.refresh();
       return 
      }
    }
  };

  return (
   <div className="flex gap-2" onClick={removePublished}>
     <Image className="w-[12px] h-[12px] cursor-pointer" src={del} alt="del" width={200} height={200} />
    <span className="text-[10px] cursor-pointer">Delete</span>
    <ToastContainer/>
   </div>
  );
}
