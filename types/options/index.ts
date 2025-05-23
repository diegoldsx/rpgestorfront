import { z } from "zod";
import { Option } from "./Option";

const createEnumFromOptions = <T extends readonly Option[]>(
  options: T
) => z.enum(options.map(o => o.value) as [string, ...string[]]);


const AccessTypeOptions: Option[] = [
  { value: 'private', label: 'Privado' },
  { value: 'public', label: 'Público' },
]
export const AccessTypeEnum = createEnumFromOptions(AccessTypeOptions);
export type AccessType = z.infer<typeof AccessTypeEnum>;

export const BanksOptions: Option[] = [
  { label: 'Caixa', value: 'caixa' },
  { label: 'Bradesco', value: 'bradesco' },
  { label: 'Itaú', value: 'itau' },
  { label: 'Nubank', value: 'nubank' },
] as const;
export const BankEnum = createEnumFromOptions(BanksOptions);
export type Bank = z.infer<typeof BankEnum>;

export const StatesUF: Option[] = [
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Distrito Federal', value: 'DF' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Pará', value: 'PA' },
  { label: 'Paraíba', value: 'PB' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Norte', value: 'RN' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Rondônia', value: 'RO' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Sergipe', value: 'SE' },
  { label: 'Tocantins', value: 'TO' },
] as const;
export const StateUFEnum = createEnumFromOptions(StatesUF);
export type StateUF = z.infer<typeof StateUFEnum>;


export const Status: Option[] = [
  { label: 'Ativo', value: 'active' },
  { label: 'Inativo', value: 'inactive' },
  { label: 'Pendente', value: 'pending' },
] as const;
export const StatusEnum = createEnumFromOptions(Status);
export type StatusType = z.infer<typeof StatusEnum>;

export const DiscountTypeOptions: Option[] = [
  { label: 'R$', value: 'real' },
  { label: '%', value: 'percent' },
] as const;
export const DiscountEnum = createEnumFromOptions(DiscountTypeOptions);
export type Discount = z.infer<typeof DiscountEnum>;

export const EmailModels = [
  { label: 'Campanha Mobile', value: 'mobile' },
  { label: 'Carteirinha', value: 'card' },
  { label: 'Carteirinha Sócio', value: 'associateCard' },
  { label: 'Taxa associativa', value: 'associateTax' },
] as const;
export const EmailModelEnum = createEnumFromOptions(EmailModels);
export type EmailModel = z.infer<typeof EmailModelEnum>;

export const DocumentType: Option[] = [
  { label: 'Pessoa Física', value: 'pf' },
  { label: 'Pessoa Jurídica', value: 'pj' },
] as const;
export const DocumentTypeEnum = createEnumFromOptions(DocumentType);
export type Document = z.infer<typeof DocumentTypeEnum>;

export const PaymentMethodOptions: Option[] = [
  { label: 'Transferência Bancária', value: 'transference' },
  { label: 'Pix', value: 'pix' },
  { label: 'Boleto', value: 'invoice' },
  { label: 'Dinheiro', value: 'cash' },
];
export const PaymentMethodEnum = createEnumFromOptions(PaymentMethodOptions);
export type PaymentMethod = z.infer<typeof PaymentMethodEnum>;

export const CostCenterOptions: Option[] = [
  { label: 'Administrativo', value: 'administrativo' },
  { label: 'Eventos', value: 'eventos' },
  { label: 'Treinamentos', value: 'trainamentos' },
] as const;
export const CostCenterEnum = createEnumFromOptions(CostCenterOptions);
export type CostCenterType = z.infer<typeof CostCenterEnum>;

export const BillingCyclesOptions: Option[] = [
  { label: 'Mensal', value: 'monthly' },
  { label: 'Bimestral', value: 'bimonthly' },
  { label: 'Trimestral', value: 'quarterly' },
  { label: 'Anual', value: 'annually' },
] as const;
export const BillingCycleEnum = createEnumFromOptions(BillingCyclesOptions);
export type BillingCycle = z.infer<typeof BillingCycleEnum>;
