import { AxiosResponse } from "axios";
import { API } from "../../Api";
import { IPixDTO, IPixForm, IPixStatus } from "../../types/pix";

export class Pix {
  static async create(props: IPixForm): Promise<AxiosResponse<IPixDTO>> {
    return API.post(`create-pix`, props);
  }

  static async status(props: IPixStatus): Promise<AxiosResponse<IPixDTO>> {
    return API.post("status-pix", props);
  }
}
