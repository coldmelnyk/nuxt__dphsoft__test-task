import { NoteActions } from "~/enums/NoteActions";
import type { Note } from "~/types/Note";

export const useNotes = () => {
  const initialNotesArray: Note[] = [
    {
      id: "asfasf",
      title: "Note 1",
      content: "Test description for the Note 1",
    },
    {
      id: "gasfads",
      title: "Note 2",
      content: "Test description for the Note 2",
    },
    {
      id: "sdgsdfa",
      title: "Note 3",
      content: "Test description for the Note 3",
    },
    {
      id: "asfadfsdf",
      title: "Note 4",
      content: "Test description for the Note 4",
    },
    {
      id: "sfgsdfasd",
      title: "Note 5",
      content: "Test description for the Note 5",
    },
    {
      id: "asfdgsfgs",
      title: "Note 6",
      content: "Test description for the Note 6",
    },
    {
      id: "asfafs",
      title: "Note 7",
      content: "Test description for the Note 7",
    },
    {
      id: "gsfgggfs",
      title: "Note 8",
      content: "Test description for the Note 8",
    },
  ];

  const notes = useState<Note[]>("notes", () => initialNotesArray);

  const setNote = (action: NoteActions, note: Note | null = null) => {
    switch (action) {
      case NoteActions.READ_ALL:
        return notes.value;
      case NoteActions.READ:
        if (note) {
          return notes.value.find(
            (noteValue) =>
              noteValue.title.toLowerCase().trim() ===
              note.title.toLowerCase().trim()
          );
        }

        return;
      case NoteActions.ADD:
        if (note) {
          notes.value.push(note);
        }

        return;
      case NoteActions.DELETE:
        if (note) {
          notes.value = notes.value.filter(
            (noteValue) =>
              noteValue.title.toLowerCase().trim() !==
              note.title.toLowerCase().trim()
          );
        }

        return;
      case NoteActions.EDIT:
        if (note) {
          const index = notes.value.findIndex(
            (noteValue) =>
              noteValue.title.toLowerCase().trim() ===
              note.title.toLowerCase().trim()
          );

          if (index !== -1) {
            notes.value[index] = note;
          }
        }

        return;
      default:
        return;
    }
  };

  return { notes, setNote };
};
