import axios from "axios";

export const userLogin = (email, password) => async (dispatch) => {
  console.log("Runned")
  try {
    dispatch({
      type: "loginRequest",
    });
  
    const {data}= await axios.post("/api/login", { email, password });
    // console.log(data)
    dispatch({
      type: "loginSuccess",
      playload: data,
    });
  } catch (error) {
    dispatch({
      type: "loginFailure",
      playload: error.response.data.message,
    });
  }
};

// for load user
export const userLoad = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get("/api/getUserdata");
    // console.log(data)

    dispatch({
      type: "loadUserSuccess",
      playload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      playload: error.response.data.message,
    });
  }
};

// for checking auth
export const userAuth = () => async (dispatch) => {
  try {
    dispatch({
      type: "authRequest",
    });

     await axios.get("/api/getUserdata");

    dispatch({
      type: "authSuccess",
   
    });
  } catch (error) {
    dispatch({
      type: "authFailure",
      playload: error.response.data.message,
    });
  }
};


// for register
export const userRegister=(name,email,password)=>async(dispatch)=>{
  try {
    dispatch({
      type:"registerRequest"
    })

    // console.log(name,email,password);
    
    const {data}=await axios.post("/api/register",{name,email,password});
    
    dispatch({
      type:"registerSuccess",
      playload:data
    })
    
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      playload: error.response.data.message,
    });
  }
}

// add task of the login user

export const addTask=(title,description)=>async(dispatch)=>{
  try {
    dispatch({
      type:"addTaskRequest"
    })

    const {data}=await axios.post("/api/addTask",{title,description});

    dispatch({
      type:"addTaskSuccess",
      playload:data.message
    })

  } catch (error) {
    dispatch({
      type: "addTaskFailure",
      playload: error.response.data.message,
    });
  }
}


// log out user

export const logOutUser=()=>async(dispatch)=>{
  try {
    dispatch({
      type:"logOutRequest"
    })
    console.log("logout user call");
    const {data}=await axios.get("/api/logout")
    

    dispatch({
      type:"logOutSuccess",
      playload:data.message
    })

  } catch (error) {
    dispatch({
      type: "logOutFailure",
      playload: error.response.data.message,
    });
  }
}


// delete task of user

export const deleteTask=(id)=>async(dispatch)=>{
  try {
    dispatch({
      type:"deleteTaskRequest"
    })
    // console.log(id);
    const {data}=await axios.delete(`/api/deleteTask/${id}`)
    

    dispatch({
      type:"deleteTaskSuccess",
      playload:data.message
    })

  } catch (error) {
    dispatch({
      type: "deleteTaskFailure",
      playload: error.response.data.message,
    });
  }
}


// delete user

export const deleteUser=(id)=>async(dispatch)=>{
  try {
    dispatch({
      type:"deleteUserRequest"
    })
    const {data}=await axios.delete("/api/deleteAccount")
    

    dispatch({
      type:"deleteUserSuccess",
      playload:data.message
    })

  } catch (error) {
    dispatch({
      type: "deleteUserFailure",
      playload: error.response.data.message,
    });
  }
}


// call only unauth

export const unAuth=()=>async(dispatch)=>{
  dispatch({
    type:"authFailure"
  })
}



