import axios from "axios";

export const httpClient = axios.create({
  baseURL: `${process.env.API_URL}`,
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer 354|vM4wARtmLuqkTgy36aPFXl5E8xzxqOGEvvkciXQa",
  },
});

// export async function fetchQuitions() {
//   const response = await httpClient.get(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/franchise-questions`
//   );
//   return response.data;
// }


// export async function postFranchises(data: any) {
//   const response = await httpClient.post(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/franchises`,
//     data,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );
//   return response.data;
// }

// export const uploadFormData = async (formData: FormData) => {
//   try {
//     const response = await httpClient.post(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/franchises`,
//       formData
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error("An error occurred while uploading the form data.");
//   }
// };

