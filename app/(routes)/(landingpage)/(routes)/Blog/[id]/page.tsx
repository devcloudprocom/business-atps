import { BlogDetails } from "@/components/BlogDetails";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <BlogDetails id={id} />
    </div>
  );
}
