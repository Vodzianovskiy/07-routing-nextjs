import { fetchNotes } from "@/lib/api";
import Link from "next/link";
import css from "./SidebarNotes.module.css";

export default async function Default() {
  const { notes } = await fetchNotes({});

  const tags: string[] = [];

  for (const note of notes) {
    if (note.tag && !tags.includes(note.tag)) {
      tags.push(note.tag);
    }
  }

  return (
    <nav>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link className={css.menuLink} href="/notes/filter/all">
            All
          </Link>
        </li>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link className={css.menuLink} href={`/notes/filter/${tag}`}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
