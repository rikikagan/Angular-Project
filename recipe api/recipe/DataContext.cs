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
            RecipeList = new List<Recipe>{new Recipe {Name = "פסטה פרפקטו רוזה",Category=mean,DateAdded=new DateTime(2024,1,1),Difficulty=Difficult.easy,
             ImgUrl = "https://www.bishulim.co.il/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/4e7efda3ab51ad5e543be8634ef032a5.jpg?h=4f5b30f1&itok=uhHGUcx1",
            PreparationTime=15,User=user1,Ingredients=new List<string>() {"2 פרוסות לחם לבן","4 כפות מטבל מיקס בטעם מיונז","2 פרוסות גבינת מוצרלה (או לפי הטעם)",
                "2 פרוסות גבינת צ'דר (או לפי הטעם)"},
              Preparation = new List<string>(){ "בוחרים כלי הגשה וחוצים תותים בכמות מספקת לסידור בכלי.",
                    "את יתר התותים חותכים לקוביות ומעבירים לקערה, מוסיפים 2 כפות סוכר ושמים בצד לריכוך למספר דקות." ,
                    "ממיסים כחצי חבילת ג׳לי תות עם 200 מ״ל מים חמימים ומוזגים לקערת התותים." ,
                    "ניתן לטחון את התותים למחית חלקה או שניתן רק לערבב ולקבל מחית עם חתיכות.",
                    "בקערה נפרדת מקציפים 500 מ״ל שמנת להקצפה מתוקה עם 3 כפות פודינג וניל צרפתי עד לקבלת קצפת יציבה.",
                    "להרכבה: מסדרים את התותים החצויים בכלי ההגשה עם שכבת קצפת. טובלים עוגיות ביסקוטי במעט חלב ומסדרים שכבה מעל הקצפת. מעל הביסקוטי שמים מחית תותים ומעליה מכסים בעוד שכבת קצפת. חוזרים על הכל שוב ונבנה עוד שכבה. אפשר גם להשתמש בכלי רחב ולהרכיב רק שכבה אחת, תלוי בכם. לסיום, שמים שכבת מחית ומכניסים למקרר להתייצבות." }}};
            RecipeList.Add(new Recipe
            {
                Name = "לביבות גבינה מתוקות",
                Category = mean,
                DateAdded = new DateTime(2024, 1, 1),
                Difficulty = Difficult.easy,
                ImgUrl = "https://www.bishulim.co.il/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/8821be877aa4bc06551e923aac8f7f94.jpg?h=f11a1380&itok=TrzE6utx",
                PreparationTime = 25,
                User = user1,
                Ingredients = new List<string>() {"קמח (1 כוס + 3 כפות)","1כפית אבקת אפייה","250 גרם גבינה לבנה רכה 5%"
                ,"1 מיכל שמנת חמוצה","5 כפות פודינג אינסטנט בטעם וניל","2 ביצה",
                "3 כפות סוכר לבן","2 שקיות וניל","3 כפות שמן קנולה","לפי הטעם אבקת סוכר","3/4 כוס שמן קנולה"},
                Preparation = new List<string>(){ "מערבבים את כל המרכיבים יחד, עד לקבלת תערובת חלקה ואחידה.",
                    "שמים במחבת בינונית שמן, כחצי גובה (טיגון חצי עמוק), ומחממים על להבה בינונית." ,
                    "יוצקים בעזרת כף לביבות ומכניסים לשמן החם, מטגנים משני הצדדים." ,
                    "מקררים מעט ומפזרים אבקת סוכר. בתיאבון!",}});
            RecipeList.Add(new Recipe
            {
                Name = "  עוף במרינדת תפוזים",
                Category = mean,
                DateAdded = new DateTime(2024, 1, 1),
                Difficulty = Difficult.medium,
                ImgUrl = "https://www.bishulim.co.il/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/c6d0f65ec3b857f26bc334018cdf32de.jpg?h=a2559eee&itok=2n5k8XNT",
                PreparationTime = 10,
                User = user1,
                Ingredients = new List<string>() {"3 כרעיים של עוף","2 כפות רוטב סויה קלאסי 290 מ\"ל"," 2 כפות רוטב טריאקי 290 מ\"ל"
                ,"1 כפית דבש או סוכר חום","1/2 כוס מיץ תפוזים","1/4 כוס מיץ לימון",
                " 3 שיני שום קצוצות","1 קורט ג'ינג'ר מגורר (לא חובה)"},
                Preparation = new List<string>(){ "מערבבים את רכיבי המרינדה, מתבלים במלח ופלפל לפי הטעם. שופכים על העוף ומעסים אותו.",
                    "מפזרים את התפוזים." ,
                    "צולים בחום של 180 מעלות כחצי שעה." ,
                    "ואז בחום של 150 מעלות למשך שעה וחצי.",}
            });
            RecipeList.Add(new Recipe
            {
                Name = "טארט שוקולד",
                Category = Cakes,
                DateAdded = new DateTime(2024, 1, 1),
                Difficulty = Difficult.pro,
                ImgUrl = "https://www.bishulim.co.il/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/2c35e8b4f328a8614ae587ab05dc8dbc.jpg?h=c8ed0457&itok=Dh6iJ1PL",
                PreparationTime = 60,
                User = user1,
                Ingredients = new List<string>() {"200 גרם חמאה" ,"1/2 כוס סוכר לבן (100 גרם)",
                "2 כוסות קמח תופח  1 ק\"ג + 2 כפות (300 גרם)",
                    "1 ביצה","2 חבילות גבינת ריקוטה (500 גרם)",
                    "1 צינצנת ממרח אגוזי לוז (קטנה)"},
                Preparation = new List<string>(){
"להכנת הקלתית - שמים במיקסר עם וו גיטרה את החמאה, הסוכר והביצה, ומעבדים עד שאין גושים של חמאה."
                ,"מוסיפים את הקמח, ומעבדים הכל יחד עד איחוד."
                ,"מרדדים את הקלתית בעזרת מערוך על משטח מקומח, ומרפדים איתה את תבנית הפאי (תבנית פאי בקוטר 26 ס\"מ)."
                ,"מחממים תנור לחום של 180 מעלות.",
                "להכנת המלית - מערבבים בקערה את הריקוטה עם הנוטלה עד איחוד מושלם (רצוי בעזרת מטרפה).",
                "יוצקים את המלית בתוך הקלתית, ואופים כ-30 דקות.",
                "מצננים היטב. רצוי לקרר את הטארט שעתיים-שלוש לפני אכילתו. בתיאבון!"}
            });
            RecipeList.Add(new Recipe
            {
                Name = "תבשיל דלעת צלויה",
                Category = mean,
                DateAdded = new DateTime(2024, 1, 1),
                Difficulty = Difficult.starter,
                ImgUrl = "https://www.bishulim.co.il/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/0d89510d6f83a1ef6a60ab5130f26368.jpg?h=bb05ae10&itok=f3MM3VJr",
                PreparationTime = 30,
                User = user1,
                Ingredients = new List<string>() {
                " 2 קילוגרם דלעת חתוכה לקוביות גדולות של 5 ס\"מ",
                "800 גרם שעועית ירוקה דקה",
                "1/3 רוטב סויה קלאסי 290 מ\"ל",
                "1/3 רוטב צ'ילי מתוק 290 מ\"ל"},
                Preparation = new List<string>(){
                "מחממים תנור ל-180 מעלות."
                ,"מערבבים סויה, צ'ילי מתוק, שמן, מיץ וקליפת לימון, שום ודבש בקערה."
                ,"יוצקים מחצית מהכמות על הדלעת החתוכה (את היתרה שומרים להמשך). ."
                ,"מערבבים היטב לציפוי קוביות הדלעת ומעבירים לתבנית.",
                "צולים כ- 20 דקות בתנור עד שהדלעת זהובה ודי רכה.",
                "בינתיים חולטים שעועית כ-4-5 דקות ומסננים.",
                "מעבירים לקערה עם מי קרח לקירור, כדי לשמור על הצבע, מסננים."}
            });
            RecipeList.Add(new Recipe
            {
                Name = "מרק כתום",
                Category = soups,
                DateAdded = new DateTime(2024, 1, 1),
                Difficulty = Difficult.starter,
                ImgUrl = "https://www.bishulim.co.il/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/b4c208d21629b9ea6754d2993ad008e0.jpg?h=c5d177e4&itok=j6o6_Luj",
                PreparationTime = 40,
                User = user1,
                Ingredients = new List<string>() {
                " 1 בצל קצוץ",
                "3 כפות שמן זית",
                "2 שיני שום קצוצות",
                "1 כף ג'ינג'ר קצוץ או מגורר"},
                Preparation = new List<string>(){
                "מאדים את הבצל בשמן זית עד שקיפות."
                ,"מוסיפים את הירקות."
                ,"מוסיפים את המים."
                ,"מוסיפים את כל התבלינים.",
                "מבשלים עד ריכוך הירקות.",
                "טוחנים בבלנדר/מעבד מזון, עד לקבלת מרקם חלק.",
                "מחזירים את המרק לסיר על להבה נמוכה, מוסיפים 1/2 פחית חלב קוקוס, ומערבבים."}
            });
            CategoryList = new List<Category>();
            CategoryList.Add(desserts);
            CategoryList.Add(soups);
            CategoryList.Add(mean);
            CategoryList.Add(Cakes);
        }

    }
}
