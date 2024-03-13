using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace recipe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        
        public readonly DataContext _data;
        public UserController(DataContext data)
        {
            _data= data;
        }

        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _data.UserList;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _data.UserList.Find(x=>x.Id==id);
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] User user)
        {
            _data.UserList.Add(user);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User newUser)
        {
            var user= _data.UserList.Find(x=>x.Id==id);
            user.UserName = newUser.UserName;
            user.Password = newUser.Password;
            user.Email = newUser.Email;
            
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var user = _data.UserList.Find(u => u.Id == id);
            _data.UserList.Remove(user);
        }
    }
}
