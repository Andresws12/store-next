export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const page = (await params).page;
  return <div>My Post: {page}</div>;
}
