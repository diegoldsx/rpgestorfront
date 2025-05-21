
import { StateUFEnum } from "@/types/options";
import { z } from "zod";

export const MemberSchema = z.object({
  id: z.string().optional(),
  email: z.string().email("Formato de email inválido"),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  name: z.string().optional(),
  birthDate: z.string().optional(),
  corporateName: z.string().optional(),
  tradeName: z.string().optional(),
  financialStatus: z.string().nonempty("Status financeiro é obrigatório"),
  billingCycle: z.string().nonempty("Ciclo de faturamento é obrigatório"),
  paymentGroup: z.string().nonempty("Grupo de pagamento é obrigatório"),
  paymentMethod: z.string().nonempty("Método de pagamento é obrigatório"),
  type: z.string().nonempty("Tipo é obrigatório"),
  cep: z.string().nonempty("CEP é obrigatório"),
  street: z.string().nonempty("Rua é obrigatória"),
  number: z.string().nonempty("Número é obrigatório"),
  complement: z.string().optional(),
  neighborhood: z.string().nonempty("Bairro é obrigatório"),
  state: StateUFEnum,
  city: z.string().nonempty("Cidade é obrigatória"),
  document: z.string().nonempty("Documento é obrigatório"),
});

export type Member = z.infer<typeof MemberSchema>;
