using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace recipe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        public readonly DataContext _data;

        public RecipeController(DataContext data)
        {
            _data = data;
        }
        // GET: api/<RecipeController>
        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return _data.RecipeList;
        }

        // GET api/<RecipeController>/5
        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
            return _data.RecipeList.Find(_ => _.Id == id);
        }

        // POST api/<RecipeController>
        [HttpPost]
        public void Post([FromBody] Recipe recipe)
        {
            _data.RecipeList.Add(recipe);
        }

        // PUT api/<RecipeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Recipe newRecipe)
        {
            var recipe= _data.RecipeList.Find(_ => _.Id == id);
            recipe.DateAdded=newRecipe.DateAdded;
            recipe.Category=newRecipe.Category;
            recipe.Difficulty=newRecipe.Difficulty;
            recipe.Name=newRecipe.Name;
            recipe.ImgUrl=newRecipe.ImgUrl;
            recipe.Ingredients=newRecipe.Ingredients;
            recipe.Preparation=newRecipe.Preparation;
            recipe.PreparationTime=newRecipe.PreparationTime;
        }

        // DELETE api/<RecipeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var recipe= _data.RecipeList.Find(x => x.Id == id);
            _data.RecipeList.Remove(recipe);
        }
    }
}
