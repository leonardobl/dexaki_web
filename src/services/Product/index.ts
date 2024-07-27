import { AxiosResponse } from "axios";
import { API } from "../../Api";
import { IPageProduct } from "../../@types/product";
import { IPageRequest } from "../../@types/pagination";
import { removeEmpty } from "../../Util/removeEmpty";

const basePath = "/products";

export class Product {
  static async get(props?: IPageRequest): Promise<AxiosResponse<IPageProduct>> {
    if (props) {
      const values = removeEmpty(props);
      const params = new URLSearchParams(values).toString();
      return API.get(`${basePath}?${params}`);
    }

    return API.get(`${basePath}`);
  }
}
