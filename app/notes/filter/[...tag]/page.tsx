import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

interface Props {
  params: Promise<{ tag?: string[] }>;
}

export default async function FilterPage({ params }: Props) {
  const { tag } = await params;
  const resolvedTag = tag?.[0] === "all" || !tag ? undefined : tag[0];
  const { notes } = await fetchNotes({ tag: resolvedTag });
  return <NoteList notes={notes} />;
}
