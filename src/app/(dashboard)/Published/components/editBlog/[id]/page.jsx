import { BASE_API_URL } from "@/Utils/constants";
import EditPublishedForm from "../EditPublishedForm";

const getBlogById = async (id) => {
  const res = await fetch(`${BASE_API_URL}/api/published/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Published");
  }

  return res.json();
};

export default async function EditBlog({ params }) {
  const { id } = params;
  const { published } = await getBlogById(id);
  const { title, tag, tagImage, readtime, story } = published;

  return <EditPublishedForm id={id} title={title} tag={tag} tagImage={tagImage} readtime={readtime} story={story} />;
}
