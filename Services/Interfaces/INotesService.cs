using ChiengPlannerVue.Models.Notes;

namespace ChiengPlannerVue.Services.Interfaces
{
    public interface INotesService
    {
        List<Note> GetNotes();
        Note GetNote(int id);
        int NotesCount();
        bool NoteExists(int id);
        void AddNote(int? userId, string title, string body, string plainText);
        void UpdateNote(int noteId, string title, string body, string plainText, DateTime modifiedDate);
        void DeleteNote(int noteId);
    }
}
