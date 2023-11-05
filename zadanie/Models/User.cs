using System.ComponentModel.DataAnnotations;

namespace zadanie.Models
{
	public class User
	{
		public int Id { get; set; }
		[Required, MaxLength(30)]
		public string name { get; set; } = string.Empty;
		public string phone { get; set; } = string.Empty;
	}
}

