import { API } from "../base";
import { User } from "../group";

export interface Response {
  data: Data
  status: number
}

export interface Data {
  error: string
  message: string
  statusCode: number
}
////

export interface ErrorHandle {
  data: {
    error: string;             
    message: string[];           
    statusCode: number;        
  };
  status: number;   
}

export interface ErrorResponse{
  message: string 
  error?: string
  statusCode: number
}

export interface Assignee {
  "id": number,
  "name": string,
  "email": string,
  "dateofbirth": string,
  "updatedAt": string,
  "role": string
}

export interface Task {
  "id": number,
  "title": string,
  "description": string,
  "dueDate": string,
  "priority": string,
  "status": string,
  "createdAt": string,
  "updatedAt": string,
  "createdById": number,
  "assignees": Assignee [],
  "createdBy": User
  
}


const taskApi = API.injectEndpoints({
  endpoints: (build) => ({
    getMyTask: build.mutation<Task[] | ErrorResponse, string>({
      query: (token) => ({
        url: "/tasks/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetMyTaskMutation,
} = taskApi;
