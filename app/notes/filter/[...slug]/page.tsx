import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export default async function FilterPage({ params }: Props) {
  const { slug } = await params;
  const resolvedTag = slug?.[0] === "all" || !slug ? undefined : slug[0];
  const { notes } = await fetchNotes({ tag: resolvedTag });
  return <NoteList notes={notes} />;
}
