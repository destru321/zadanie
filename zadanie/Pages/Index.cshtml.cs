using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using zadanie.Data;
using zadanie.Models;

namespace zadanie.Pages;

public class IndexModel : PageModel
{
    private readonly MyDbContext _context;

    public IndexModel(MyDbContext context)
    {
        _context = context;
    }

    public List<User> Users { get; set; }

    public async Task OnGetAsync()
    {
        Users = await _context.Users.ToListAsync();
    }
}

