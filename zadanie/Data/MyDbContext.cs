using Microsoft.EntityFrameworkCore;
using zadanie.Models;

namespace zadanie.Data
{
	public class MyDbContext : DbContext
	{
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }

        public DbSet<User> Users => Set<User>();
    }
}

