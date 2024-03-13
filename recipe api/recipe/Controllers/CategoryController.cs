using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace recipe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public readonly DataContext _data;
        public CategoryController(DataContext data)
        {
            _data = data;
        }
        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return _data.CategoryList;
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public Category Get(int id)
        {
            return _data.CategoryList.Find(c=>c.Id==id);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] Category category)
        {
            _data.CategoryList.Add(category);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Category newCategory)
        {
            var category=_data.CategoryList.Find(_ => _.Id==id);
            
            category.Name=newCategory.Name; 
            category.IconUrl=newCategory.IconUrl;
            
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var category=_data.CategoryList.Find(_=>_.Id==id);
            _data.CategoryList.Remove(category);
        }
    }
}
