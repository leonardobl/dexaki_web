import { AxiosResponse } from "axios";
import { API } from "../../Api";
import {
  IPixDTO,
  IPixForm,
  IPixStatusDTO,
  IPixStatusProps,
} from "../../types/pix";

export class Pix {
  static async create(props: IPixForm): Promise<AxiosResponse<IPixDTO>> {
    return API.post(`create-pix`, props);
  }

  static async status(
    props: IPixStatusProps
  ): Promise<AxiosResponse<IPixStatusDTO>> {
    return API.post("status-pix", props);
  }
}
