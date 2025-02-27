import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <Link href={`/img/${image.id}`}>
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Image
              src={image.url}
              // style={{ objectFit: "contain" }}
              width={480}
              height={480}
              alt={image.name}
            />
            <div>{image.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
