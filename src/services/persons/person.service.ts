import { HttpResponse } from "@/types/HttpResponse";
import { comicsAPI } from "../API";

export const PersonService = {
  getAll: async (): Promise<HttpResponse> => {
    const response = await comicsAPI.get("/person");
    return response.data;
  },

  createPerson: async (personData: {
    name: string;
    isWriter: boolean;
    isDrawer: boolean;
  }): Promise<HttpResponse> => {
    const response = await comicsAPI.post("/person", personData);
    return response.data;
  },
};
