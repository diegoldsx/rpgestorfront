"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { PageLayout } from "@/components/common/page/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/Input";
import { InputGroup } from "@/components/ui/input-group";


const handleOnCLick = () => {
  // Aqui você pode implementar a lógica para gerar o relatório
  console.log("Relatório gerado!");
}

const Page = () => {
  return (
    <PageLayout title="Relatórios" >
      <Card className="py-4 px-2">
        <CardContent>
          <form>
            <InputGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input
                name="name"
                label="Nome Completo"
                placeholder="Digite seu nome completo"

              />
              <Input
                name="name2"
                label="Nome Completo"
                placeholder="Digite seu nome completo"

              />
              <Input
                name="name3"
                label="Nome Completo"
                placeholder="Digite seu nome completo"

              />

            </InputGroup>

          </form>


        </CardContent>
        <CardFooter>

          <Button onClick={handleOnCLick}>Gerar relatório</Button>

        </CardFooter>
      </Card>

    </PageLayout>
  );
};

export default Page;
