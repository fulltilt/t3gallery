const mockUrls = [
  "https://utfs.io/f/ada6bfbb-6e3c-4522-91e8-a35f51d3fe20-7ryamc.png",
  "https://utfs.io/f/32693d40-1703-43af-82bd-d78994d8c599-sy3n9e.png",
  "https://utfs.io/f/b4a6318f-dfb7-4382-b71f-589749ae7177-vbzg9s.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
