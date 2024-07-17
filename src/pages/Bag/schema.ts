import { z } from "zod";

const phoneMask = /^\(\d{2}\) \d{4,5}-\d{4}$/;

export const formSchemaUser = z.object({
  phone: z.string().min(5, 'Campo Obrigatório').regex(phoneMask, 'Número inválido'),
  name: z.string().min(3, 'Campo é obrigatório'),
});

export type IDataUserProps = z.infer<typeof formSchemaUser>;