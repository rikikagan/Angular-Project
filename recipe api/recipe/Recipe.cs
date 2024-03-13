namespace recipe
{
    public enum Difficult
    {
        starter=1,
        easy,
        medium,
        difficult,
        pro
    }

    public class Recipe
    {
        private static int num = 1;
        public int Id { get; set; }
        public string Name { get; set; }
        public Category Category { get; set; }
        public int PreparationTime { get; set; }
        public Difficult Difficulty { get; set; }
        public DateTime DateAdded { get; set; }
        public List<string> Ingredients { get; set; }
        public List<string> Preparation { get; set; }
        public User User { get; set; }
        public string ImgUrl { get; set; }
        public Recipe(string name, Category category, int preparationTime, Difficult difficulty, DateTime dateAdded,
            List<string> ingredients, List<string> preparation, User user, string imgUrl)
        {
            Id = num++;
            Name = name;
            Category = category;
            PreparationTime = preparationTime;
            Difficulty = difficulty;
            DateAdded = dateAdded;
            Ingredients = ingredients;
            Preparation = preparation;
            User = user;
            ImgUrl = imgUrl;
        }
        public Recipe()
        {
            Id = num++;
        }
    }
  
}

