using ChiengPlannerVue.Models.Notes;

namespace ChiengPlannerVue.Services.Interfaces
{
    public interface INotesService
    {
        List<Note> GetNotes();
        Note GetNoteById(int id);
        Note GetNoteByGuid(string guid);
        int NotesCount();
        bool NoteExists(int id);
        int AddNote(int userId, string title, string body, string plainText);
        void UpdateNote(int noteId, string title, string body, string plainText, DateTime modifiedDate);
        void DeleteNote(int noteId);
    }
}
