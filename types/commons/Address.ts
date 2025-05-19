import { Option } from "../options/Option";

export type Address = {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: Option;
  cep: string;
  complement?: string;
};
