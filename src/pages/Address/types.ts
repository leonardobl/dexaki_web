import { z } from "zod";

const phoneMask = /^\(\d{2}\) \d{4,5}-\d{4}$/;

export const formSchema = z.object({
  numero: z.string().min(5, 'Campo Obrigatório').regex(phoneMask, 'Número inválido'),
  rua: z.string().min(3, 'Campo é obrigatório'),
  complemento: z.string().min(3, 'Campo é obrigatório'),
});

export type IDataAdressProps = z.infer<typeof formSchema>;