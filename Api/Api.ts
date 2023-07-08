import axios from "axios";
// ${process.env.API_URL}
export const httpClient = axios.create({
  baseURL: 'https://cafe.highdam-sk.com/api',
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer 354|vM4wARtmLuqkTgy36aPFXl5E8xzxqOGEvvkciXQa",
  },
});

export const getRequest =async (http : string) => {
  const response =  await httpClient.get(`${http}`)
  return response.data
}
export const postRequest =async (http : string , data : any ,formData:string ) => {
try{
  const response =  await httpClient.post(`/${http}` , data,
  {
    headers: {
    "Content-Type": formData ? "multipart/form-data":"application/json",
    },
  }
)
return response.data
}

  catch (error) {
    throw new Error("An error occurred while uploading the form data.");
  }
}
export const putRequest =async (http : string, id : number ,formData:string, data?:any) => {
  try{

    const response =  await httpClient.put(`/${http}/${id}` , data,
      {
        headers: {
        "Content-Type": formData ? "multipart/form-data":"application/json",
        },
      }
    )
  
    return response.data
  } catch (error) {
      throw new Error("An error occurred while uploading the form data.");
    }

}
export const deleteRequest =async (http : string, id : number) => {
  const response =  await httpClient.delete(`/${http}/${id}`)
  return response.data
}