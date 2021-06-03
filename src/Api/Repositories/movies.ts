import ApiInstance from "../instance";

export const getPopular = async () => {
  try {
    const data = await ApiInstance.get("/movie/popular");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
