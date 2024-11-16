import AdCreationForm from "@/components/AdCreationForm";

export default async function Page({
  params,
}: {
  params: Promise<{ catagory: string }>;
}) {
  const slug = (await params).catagory;
  return (
    <div>
      My Post: {slug}
      <AdCreationForm />
    </div>
  );
}
