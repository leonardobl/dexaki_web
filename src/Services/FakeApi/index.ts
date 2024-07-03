import { AxiosResponse } from "axios";
import { API } from "../../Api";
import { IItemPageDTO, ItemProps } from "../../@types/itemFake";
import { removeEmpty } from "../../Util/removeEmpty";
import objectToParams from "../../Util/objectToParams";

const baseUrl = "/food/menuItems";

export class Product {
  static get(props: ItemProps): Promise<AxiosResponse<IItemPageDTO>> {
    const values = removeEmpty(props);
    const params = objectToParams(values);

    return API.get(
      `${baseUrl}/search?${params}&apiKey=${import.meta.env.VITE_API_KEY}`
    );
  }
}
