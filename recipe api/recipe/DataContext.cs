namespace recipe
{
    public class DataContext
    {
        public List<User> UserList { get; set; }
        public List<Recipe> RecipeList { get; set; }
        public List<Category> CategoryList { get; set; }
        public DataContext()
        {
            User user1 = new User("ריקי","rabi 34","r0533147262@gmail.com","111");
            List<string> ingredients = new List<string>() { "1 כוס סוכר", "2 כוסות מים", "1/2 כפית אבקת אפייה" };
            Category desserts = new Category("קינוחים", "");
            Category soups = new Category("מרקים", "");
            Category mean = new Category("מנה עיקרית", "");
            Category Cakes = new Category("עוגות", "");
            UserList = new List<User>();
            UserList.Add(user1);
            RecipeList = new List<Recipe>{new Recipe {Name="קרמבו פתי בר",Category=Cakes,DateAdded=new DateTime(2024,1,1),Difficulty=Difficult.easy,
            ImgUrl="https://www.bishulim.co.il/sites/default/files/styles/home_stage_944_531/public/srh_recipes/94561064b90b79a4ec92c75ef3f9eb79.jpg?h=4f5b30f1&itok=hYevqIzf",
                PreparationTime=15,User=user1,Ingredients=ingredients,
                Preparation=new List<string>(){ "בוחרים כלי הגשה וחוצים תותים בכמות מספקת לסידור בכלי.",
                    "את יתר התותים חותכים לקוביות ומעבירים לקערה, מוסיפים 2 כפות סוכר ושמים בצד לריכוך למספר דקות." ,
                    "ממיסים כחצי חבילת ג׳לי תות עם 200 מ״ל מים חמימים ומוזגים לקערת התותים." ,
                    "ניתן לטחון את התותים למחית חלקה או שניתן רק לערבב ולקבל מחית עם חתיכות.",
                    "בקערה נפרדת מקציפים 500 מ״ל שמנת להקצפה מתוקה עם 3 כפות פודינג וניל צרפתי עד לקבלת קצפת יציבה.",
                    "להרכבה: מסדרים את התותים החצויים בכלי ההגשה עם שכבת קצפת. טובלים עוגיות ביסקוטי במעט חלב ומסדרים שכבה מעל הקצפת. מעל הביסקוטי שמים מחית תותים ומעליה מכסים בעוד שכבת קצפת. חוזרים על הכל שוב ונבנה עוד שכבה. אפשר גם להשתמש בכלי רחב ולהרכיב רק שכבה אחת, תלוי בכם. לסיום, שמים שכבת מחית ומכניסים למקרר להתייצבות." } } };
            CategoryList = new List<Category>();
            CategoryList.Add(desserts);
            CategoryList.Add(soups);
            CategoryList.Add(mean);
            CategoryList.Add(Cakes);
        }

    }
}
