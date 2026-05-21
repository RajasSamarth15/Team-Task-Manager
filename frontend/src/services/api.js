import axios from "axios";

const api = axios.create({

 baseURL:"https://team-task-manager-production-332b.up.railway.app/api"

});

api.interceptors.request.use(

(config)=>{

 const token=
 localStorage.getItem("token");

 if(token){

  config.headers.Authorization=
  `Bearer ${token}`;

 }

 return config;

}

);

export default api;