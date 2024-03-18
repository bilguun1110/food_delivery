import axios from "axios";
import { FoodType } from "@/app/page";
import { Searched } from "@/components/search/Searched";
import { NoItem } from "@/components/search/NoItem";

const SearchPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const body = {
    filter: {
      $or: [
        {
          name: {
            $regex: id,
            $options: "i",
          },
        },
        {
          price: {
            $regex: id,
          },
        },
      ],
    },
  };
  const aldaa: any = [];
  const getAllFoods = async () => {
    try {
      const { data } = await axios.post<FoodType[]>(
        "http://localhost:8000/foods",
        body
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const result = await getAllFoods();

  if (!result) {
    throw new Error("data irsengui aldaa garlaa");
  }

  return (
    <>
      {<Searched result={result} />}
      {result.length === 0 && <NoItem />}
    </>
  );
};

export default SearchPage;
