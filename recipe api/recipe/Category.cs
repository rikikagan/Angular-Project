namespace recipe
{
    public class Category
    {
        private static int num = 1;
        public int Id { get; set; }
        public string Name { get; set; }
        public string IconUrl { get; set; }

        public Category(string name, string iconUrl)
        {
            Id = num++;
            Name = name;
            IconUrl = iconUrl;
        }
        public Category()
        {
            Id = num++;
        }
    }
}
