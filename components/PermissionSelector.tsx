"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/Checkbox";
import Select from "@/components/Select";
import { asPermissionLevel, ModulePermission, PermissionLevel } from "@/types/user/user";

const MODULES = ["financeiro", "eventos", "usuarios"];

const LEVELS = [
  { value: "read", label: "Leitura" },
  { value: "edit", label: "Edição" },
  { value: "admin", label: "Admin" },
];

export function PermissionSelector() {
  const { control } = useFormContext();

  return (
    <Controller
      name="permissions"
      render={({
        field: { value = [], onChange },
      }: {
        field: {
          value: ModulePermission[];
          onChange: (value: ModulePermission[]) => void;
        };
      }) => {
        const toggleModule = (module: string, checked: boolean) => {
          const newValue = checked
            ? [...value, { module, level: "read" }]
            : value.filter((p) => p.module !== module);
          onChange(newValue);
        };

        const updateLevel = (module: string, level: string) => {
          const newValue = value.map((p) =>
            p.module === module ? { ...p, level: level as PermissionLevel } : p
          );
          onChange(newValue);
        };

        return (
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-2">Permissões por módulo</h3>
            {MODULES.map((module) => {
              const selected = value.find((p) => p.module === module);

              return (
                <div key={module} className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`checkbox-${module}`}
                      checked={!!selected}
                      onCheckedChange={(c) => toggleModule(module, !!c)}
                    />
                    <label htmlFor={`checkbox-${module}`} className="text-sm">
                      {module}
                    </label>
                  </div>

                  {selected && (
                    <Select
                      options={LEVELS}
                      value={selected.level}
                      onChange={(level) => updateLevel(module, asPermissionLevel(level))}
                    />
                  )}
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
}
