import ApiInstance from "../../instance";
import { Movie } from "./types";

export const getPopular = async (): Promise<Movie[]> => {
  const data = await ApiInstance.get("/movie/popular");
  return data.data.results;
};
