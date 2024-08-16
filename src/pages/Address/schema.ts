import { z } from "zod";

export const formSchema = z.object({
  numero: z.string().min(3, "Campo Obrigatório"),
  cep: z.string().min(9, "CEP invalido"),
  rua: z.string().min(3, "Campo é obrigatório"),
  bairro: z.string().min(3, "Campo é obrigatório"),
  complemento: z.string().optional(),
  estado: z.string().min(3, "Campo é obrigatório"),
  cidade: z.string().min(3, "Campo é obrigatório"),
  referencia: z.string().optional(),
});

export type IDataAdressProps = z.infer<typeof formSchema>;
