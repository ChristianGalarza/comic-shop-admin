import { HttpResponse } from "@/types/HttpResponse";
import { comicsAPI } from "../API";

export const PersonService = {
  getAll: async (): Promise<HttpResponse> => {
    const response = await comicsAPI.get("/persons");
    return response.data;
  },

  createPerson: async (personData: {
    name: string;
    isWriter: boolean;
    isDrawer: boolean;
  }): Promise<HttpResponse> => {
    const response = await comicsAPI.post("/persons", personData);
    return response.data;
  },
};
