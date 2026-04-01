import { Comic } from "@/types/Comic";
import { comicsAPI } from "../API";
import { HttpResponse } from "@/types/HttpResponse";

export const ComicService = {
  getAll: async (): Promise<HttpResponse> => {
    const response = await comicsAPI.get("/comics");
    return response.data;
  },

  createComic: async (formData: FormData): Promise<HttpResponse> => {
    const response = await comicsAPI.post("/comics", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};
