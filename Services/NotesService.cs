using ChiengPlannerVue.Models;
using ChiengPlannerVue.Models.Notes;
using ChiengPlannerVue.Services.Interfaces;

namespace ChiengPlannerVue.Services
{
    public class NotesService : INotesService
    {
        private ChiengPlannerContext _context;

        public NotesService(ChiengPlannerContext context)
        {
            _context = context;
        }

        public List<Note> GetNotes()
        {
            return _context.Notes.ToList();
        }

        public Note GetNote(int id)
        {
            return _context.Notes.Where(x => x.NotesId == id).First();
        }

        public int NotesCount()
        {
            return _context.Notes.Count();
        }

        public bool NoteExists(int id)
        {
            return _context.Notes.Where(x => x.NotesId == id).Any();
        }

        public void AddNote(int? userId, string title, string body, string plainText)
        {
            var note = new Note();
            note.Title = title;
            note.Body = body;
            // Keep UserId null until Users and Authentication process is complete.
            note.UserId = userId;
            note.PlainText = plainText;
            _context.Notes.Add(note);
            _context.SaveChanges();
        }

        public void UpdateNote(int noteId, string title, string body, string plainText, DateTime modifiedDate)
        {
            var note = GetNote(noteId);
            note.Title = title;
            note.Body = body;
            note.PlainText = plainText;
            note.ModifiedDate = modifiedDate;
            _context.SaveChanges();
        }

        public void DeleteNote(int noteId)
        {
            var note = GetNote(noteId);
            _context.Notes.Remove(note);
            _context.SaveChanges();
        }
    }
}
