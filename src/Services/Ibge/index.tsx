import { AxiosResponse } from "axios";
import { IEstado, IUFS } from "../../types/ibge";
import { ApiIbge } from "../../Api/Ibge";

export class Ibge {
  static async UFs(): Promise<AxiosResponse<IUFS[]>> {
    return ApiIbge.get(`estados`);
  }

  static async CidadesPorEstado({
    sigla,
  }: {
    sigla: string;
  }): Promise<AxiosResponse<IEstado[]>> {
    return ApiIbge.get(`estados/${sigla}/distritos`);
  }
}
