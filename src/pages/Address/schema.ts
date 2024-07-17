import { z } from "zod";

export const formSchema = z.object({
  numero: z.string().min(1, 'Campo Obrigatório'),
  rua: z.string().min(3, 'Campo é obrigatório'),
  complemento: z.string().min(3, 'Campo é obrigatório'),
});

export type IDataAdressProps = z.infer<typeof formSchema>;