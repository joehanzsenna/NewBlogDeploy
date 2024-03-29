import { BASE_API_URL } from "@/Utils/constants";
import EditDraftedForm from "../EditDraftedForm";

const getBlogById = async (id) => {
  const res = await fetch(`${BASE_API_URL}/api/draft/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch drafted");
  }

  return res.json();
};

export default async function EditBlog({ params }) {
  const { id } = params;
  const { drafted } = await getBlogById(id);
  const { title, tag, tagImage, readtime, story } = drafted;

  return <EditDraftedForm id={id} title={title} tag={tag} tagImage={tagImage} readtime={readtime} story={story} />;
}
