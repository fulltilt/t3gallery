import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  console.log(images);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((p) => (
          <div key={p.id}>{p.name}</div>
        ))}
        {[...images, ...images, ...images].map((image, idx) => (
          <div key={idx} className="flex w-48 flex-col">
            <img src={image.url} alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
