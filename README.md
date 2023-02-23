```
This is the Frontend part of the To-Do-List application
```
## Routes
```
path="/" element={isAuth ? <User /> : <Login />} 
path="/register" element={isAuth ? <User /> : <Register />} 
```
## Management of State
```
For management of the state in this web application, I use Redux.

Store:
user: user, // for authentication of user
loadUser: loadUser, //for managing all data of the user
userMethod: userMethod, //collect all response from backend 
```