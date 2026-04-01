import { HttpResponse } from "@/types/HttpResponse";
import { comicsAPI } from "../API";

export const PublisherService = {
  getAll: async (): Promise<HttpResponse> => {
    const response = await comicsAPI.get("/publishers");
    return response.data;
  },

  createPublisher: async (formData: FormData): Promise<HttpResponse> => {
    const response = await comicsAPI.post("/publishers", formData);
    return response.data;
  },
};
