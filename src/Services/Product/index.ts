import { AxiosResponse } from "axios";
import { API } from "../../Api";
import {
  IPageProductDTO,
  IProductByCompanyProps,
  IProductDTO,
} from "../../types/product";

import { removeEmpty } from "../../Util/removeEmpty";

const basePath = "/product";

export class Product {
  static async getByCompanyName(
    props: IProductByCompanyProps
  ): Promise<AxiosResponse<IPageProductDTO>> {
    let params = "";
    const { companyName, ...rest } = props;

    if (rest) {
      const values = removeEmpty(rest);
      params = new URLSearchParams(values).toString();
    }

    return API.get(
      params
        ? `${basePath}/${companyName}?${params}`
        : `${basePath}/${companyName}`
    );
  }

  static async getById(id: string): Promise<AxiosResponse<IProductDTO>> {
    return API.get(`${basePath}/${id}`);
  }
}
