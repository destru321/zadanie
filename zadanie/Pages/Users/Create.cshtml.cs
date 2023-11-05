using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using zadanie.Data;
using zadanie.Models;

namespace zadanie.Pages.Users
{
	public class CreateModel : PageModel
    {
        private readonly MyDbContext _context;

        [BindProperty]
        public User? User { get; set; }

        public CreateModel(MyDbContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            if (User != null)
            {
                _context.Users.Add(User);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("/Index");
        }
    }
}
