'use client'

import { ReportPageLayout } from "@/components/common/page/ReportLayout";
import { SimpleTable } from "@/components/common/simple-table";
import { useState } from "react";
import { getReconciliationsReportAction } from "@/app/action/reports/extract"; // Server action
import { Bank, BanksOptions } from "@/types/options";
import Select from "@/components/Select";
import { DateRangeType } from "@/types/components/DateRange";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";

export interface ReconciliationReportData {
  description: string;
  date: string;
  ammount: number;
}

export interface ReconciliationReportFilters {
  account: Bank;
  from?: Date | null;
  to?: Date | null;
}

const Page = () => {
  const [data, setData] = useState<ReconciliationReportData[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log("Form Data:", Object.fromEntries(formData.entries()));
    const { data, success } = await getReconciliationsReportAction(formData);

    if (!success) {
      throw new Error("Erro ao gerar relatório");
    }
    setData(data);
    console.table(data);
  };
  return (
    <ReportPageLayout title="Relatórios" >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Select
          options={BanksOptions}
          name="account"
          label="Conta"
          placeholder="Selecione uma conta"
        />
        <div className="flex gap-4">
          <DatePicker label="Data Início" name="startDate" onDateChange={setStartDate} selectedDate={startDate as Date} />
          <DatePicker label="Data Fim" name="endDate" onDateChange={setEndDate} selectedDate={endDate as Date} />

        </div>

        <Button type="submit">Gerar relatório</Button>

      </form>



      {data.length > 0 && (
        <div className="mt-6">
          <SimpleTable columns={[
            {
              accessorKey: "description",
              header: "Descrição",
            },
            {
              accessorKey: "date",
              header: "Data",
            },
            {
              accessorKey: "ammount",
              header: "Valor",
            },
          ]} data={data} />
        </div>
      )}

    </ReportPageLayout>
  );
};

export default Page;
