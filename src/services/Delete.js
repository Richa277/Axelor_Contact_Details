import axios from "axios";
export const deleteData=(url,id,fullName,version)=>{
    let result=axios.delete(url,{
        data:{
            records:[{
                id:id,
                version:version
            }
        ]
        },
        auth:{
            username:"admin",
            password:"admin"
       },
    }).then((res)=>{
        return res;
    });
    return result

}