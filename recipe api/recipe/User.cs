namespace recipe
{
    public class User
    {
        private static int num = 1;
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public User(string userName, string address, string email, string password)
        {
            Id= num++;  
            UserName = userName;
            Address = address;
            Email = email;
            Password = password;

        }
        public User()
        {
            Id = num++;
        }
    }
}
