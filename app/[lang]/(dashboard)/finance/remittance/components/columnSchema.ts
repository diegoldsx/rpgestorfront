import { Column } from "@/types/columns/ColumnsDefinition";
import { RemittanceType } from "@/types/Remittance";
import { FacetedFilter } from "@/components/common/data-table/data-table";

// 1. Centralize as definições de opções para reutilização.
const dateTypeOptions = [
  { value: "due", label: "Vencimento" },
  { value: "payment", label: "Pagamento" },
];

const remittanceTypeOptions = [
  { value: "invoice", label: "Fatura" },
  { value: "all", label: "Todas" },
];

// 2. Simplifique a criação de colunas. createColumn não é necessário se você já está tipando o array.
export const columnSchema: Array<Column<RemittanceType>> = [
  {
    id: "id",
    title: "ID",
    type: "id",
    size: 100,
    defaultValue: ""
  },
  {
    id: "bank",
    title: "Banco",
    type: "text",
    size: 150,
        defaultValue: ""

  },
  {
    id: "search",
    title: "Pesquisa",
    type: "text",
    size: 150,    defaultValue: ""

  },
  {
    id: "searchFor",
    title: "Pesquisa por",
    type: "text",
    size: 150,    defaultValue: ""

  },
  {
    id: "dueDate",
    title: "Data de vencimento",
    type: "date",
    size: 150,    defaultValue: ""

  },
  {
    id: "finalDate",
    title: "Data final",    defaultValue: "",

    type: "date",
    size: 150,
  },
  {
    id: "dateType",
    title: "Tipo de data",
    type: "select",    defaultValue: "",

    options: dateTypeOptions,
    size: 150,
  },
  {
    id: "limit",
    title: "Limite",    defaultValue: "",

    type: "date",
    size: 150,
  },
  {
    id: "type",
    title: "Tipo",
    type: "select",    defaultValue: "",

    options: remittanceTypeOptions,
    size: 150,
  },
];

// 3. Otimize a criação dos valores padrão. O método map + Object.fromEntries é bom.
export const defaultValues = Object.fromEntries(
  columnSchema.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<RemittanceType>;

// 4. Corrija a tipagem da constante facetedFilters.
export const facetedFilters = columnSchema.filter((f) => !!f.options) as FacetedFilter[];


// 5. O `getFieldsWithOptions` e `facetedFilters` são redundantes.
//    Removi a função getFieldsWithOptions, pois facetedFilters já cumpre essa função de forma mais elegante.

// 6. Simplifique a lógica da visibilidade das colunas.
export const defaultVisibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState = Object.fromEntries(
  columnSchema.map(({ id }) => [
    id,
    defaultVisibleColumns.includes(id) || defaultVisibleColumns[0] === "*",
  ])
);