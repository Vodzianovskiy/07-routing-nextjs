"use client";

import NoteList from "@/components/NoteList/NoteList";
import type { Note } from "@/types/note";

interface Props {
  notes: Note[];
}

export default function NotesClient({ notes }: Props) {
  return <NoteList notes={notes} />;
}
