import User from "../../models/user";

 var admin = new User(0, "admin", 123456);
 var user = new User(1, "user", 123456);

var users = [admin, user];

export default users;
