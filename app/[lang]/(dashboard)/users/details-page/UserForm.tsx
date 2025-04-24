"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler, Controller } from "react-hook-form";
import { userSchema, User } from "../types"; // ajuste para seu caminho
import { Form } from "@radix-ui/react-form";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import Select from "@/components/Select";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";



const routes = [
  { label: "Assembléia", value: "/assemblies" },
  { label: "Conteúdo", value: "/content" },
  { label: "Tipo de conteúdo", value: "/content-type" },
  { label: "Clientes", value: "/customers" },
  { label: "Email Marketing", value: "/email-marketing" },
  { label: "Eventos", value: "/events" },
  { label: "Financeiro", value: "/finance" },
  { label: "Associados", value: "/members" },
  { label: "Convênios", value: "/afilliations" },
  { label: "Atendimento", value: "/service-desk" },
  { label: "Usuários", value: "/users" },
];

const statusOptions = [
  { label: "Ativo", value: "active" },
  { label: "Inativo", value: "inactive" },
];

interface UserFormProps {
  onSubmit: SubmitHandler<User>;
  user?: User;
}

export function UserForm({ onSubmit, user }: UserFormProps) {
  const methods = useForm<User>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      id: user?.id,
      name: user?.name || "",
      email: user?.email || "",
      status: user?.status || "active",
      redirectUrl: user?.redirectUrl || "",
      username: user?.username || "",
      permissions: user?.permissions || [],
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = methods;

  useEffect(() => {
    if (user?.id) {
      reset({
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
        redirectUrl: user.redirectUrl,
        username: user.username,
        permissions: user.permissions || [],
      });
    }
  }, [user, reset]);

  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(onSubmit)(event);
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <FormFieldComponent
          name="name"
          label="Nome"
          control={control}
          errors={errors}
          placeholder="Digite o nome"
        >
          <Input type="text" />
        </FormFieldComponent>

        <FormFieldComponent
          name="email"
          label="Email"
          control={control}
          errors={errors}
          placeholder="Digite o email"
        >
          <Input type="email" />
        </FormFieldComponent>

        <FormFieldComponent
          name="username"
          label="Usuário"
          control={control}
          errors={errors}
          placeholder="Digite o username"
        >
          <Input type="text" />
        </FormFieldComponent>

        <FormFieldComponent
          name="status"
          label="Status"
          control={control}
          errors={errors}
        >
          <Select options={statusOptions} />
        </FormFieldComponent>

        <FormFieldComponent
          name="redirectUrl"
          label="URL de Redirecionamento"
          control={control}
          errors={errors}
          placeholder="https://..."
        >

          <Input type="text" />
        </FormFieldComponent>

        {/* Selector de permissões */}
        <Controller
          name="permissions"
          control={control}
          render={({ field: { value = [], onChange } }) => {
            const toggleRoute = (route: string, checked: boolean) => {
              const updated = checked
                ? [...value, { route, level: "read" }]
                : value.filter((p: any) => p.route !== route);
              onChange(updated);
            };

            const updateLevel = (route: string, level: string) => {
              const updated = value.map((p: any) =>
                p.route === route ? { ...p, level } : p
              );
              onChange(updated);
            };

            return (
              <div className="md:col-span-2 mt-6 space-y-5 w-1/2 ">
                <h3 className="text-lg font-semibold">Permissões</h3>
                {routes.map((route) => {
                  const selected = value.find((p: any) => p.route === route.value);

                  return (
                    <div key={route.value} className="flex items-center gap-4">
                      <input
                        id={`perm-${route.value}`}
                        type="checkbox"
                        checked={!!selected}
                        onChange={(e) => toggleRoute(route.value, e.target.checked)}
                      />
                      <label htmlFor={`perm-${route.value}`} className="w-48">
                        {route.label}
                      </label>

                      {selected && (
                        <Select
                          options={[
                            { label: "Leitura", value: "read" },
                            { label: "Edição", value: "edit" },
                            { label: "Admin", value: "admin" },
                          ]}
                          value={selected.level}
                          onChange={(level) => updateLevel(route.value, level)}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          }}
        />
        <div className="md:col-span-2 mt-6 flex justify-end">
          <SubmitButton isSubmitting={isSubmitting} isUpdate={!!user?.id} />
        </div>
      </Form>
    </FormProvider>
  );
}
