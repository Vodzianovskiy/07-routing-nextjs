import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";
import ModalClient from "@/components/ModalClient/ModalClient";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteModal({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return (
    <ModalClient>
      <NotePreview note={note} />
    </ModalClient>
  );
}
