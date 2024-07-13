// import { Modal } from "./modal";
// import { FullPageImageView } from "~/common/full-page-image-view";

import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Inalid photo id");

  const image = await getImage(idAsNumber);

  return (
    // <Modal>
    //   <FullPageImageView photoId={photoId} />
    // </Modal>
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
