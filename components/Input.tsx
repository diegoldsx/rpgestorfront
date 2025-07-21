
import * as React from "react";

// Tipos para as variantes (baseado no seu código original)
export type InputColor = "default" | "primary" | "info" | "warning" | "success" | "destructive";
export type InputVariant = "flat" | "underline" | "bordered" | "faded" | "ghost" | "flat-underline";
export type Radius = "none" | "sm" | "md" | "lg" | "xl";
export type Shadow = "none" | "sm" | "md" | "lg" | "xl" | "2xl";
export type InputSize = "sm" | "md" | "lg" | "xl";

// Função utilitária para combinar classes
const cn = (...classes: (string | undefined | null | boolean)[]): string =>
  classes.filter(Boolean).join(' ');

// Função para gerar classes do input baseado nas variantes (baseada no seu código original)
const getInputClasses = ({
  color = "default",
  size = "md",
  variant = "bordered",
  radius = "md",
  shadow = "none"
}: {
  color?: InputColor;
  size?: InputSize;
  variant?: InputVariant;
  radius?: Radius;
  shadow?: Shadow;
}): string => {
  const baseClasses = "w-full bg-background border-default-300 dark:border-700 px-3 h-9 text-md file:border-0 file:bg-transparent file:text-sm file:font-medium read-only:leading-9 read-only:bg-background disabled:cursor-not-allowed disabled:opacity-50 transition duration-300";

  const colorClasses: Record<InputColor, string> = {
    default: "border-gray-300 text-black focus:outline-none focus:border-blue-600 disabled:bg-gray-200 placeholder:text-gray-500",
    primary: "border-blue-600 text-blue-600 focus:outline-none focus:border-blue-700 disabled:bg-blue-100 placeholder:text-blue-400",
    info: "border-cyan-400 text-cyan-600 focus:outline-none focus:border-cyan-700 disabled:bg-cyan-100 placeholder:text-cyan-400",
    warning: "border-yellow-400 text-yellow-600 focus:outline-none focus:border-yellow-700 disabled:bg-yellow-100 placeholder:text-yellow-400",
    success: "border-green-400 text-green-600 focus:outline-none focus:border-green-700 disabled:bg-green-100 placeholder:text-green-400",
    destructive: "border-red-400 text-red-600 focus:outline-none focus:border-red-700 disabled:bg-red-100 placeholder:text-red-400",
  };

  const variantClasses: Record<InputVariant, string> = {
    flat: "bg-gray-100 read-only:bg-gray-100",
    underline: "border-b",
    bordered: "border",
    faded: "border border-gray-300 bg-gray-100",
    ghost: "border-0 focus:border",
    "flat-underline": "bg-gray-100 border-b",
  };

  const sizeClasses: Record<InputSize, string> = {
    sm: "h-8 text-xs read-only:leading-8",
    md: "h-9 text-xs read-only:leading-9",
    lg: "h-10 text-sm read-only:leading-10",
    xl: "h-12 text-base read-only:leading-[48px]",
  };

  const radiusClasses: Record<Radius, string> = {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-sm",
    lg: "rounded-sm",
    xl: "rounded-sm",
  };

  const shadowClasses: Record<Shadow, string> = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
  };

  // Compound variants - baseado no seu código original
  let compoundClasses = "";
  if (variant === "flat") {
    const flatColorMap: Partial<Record<InputColor, string>> = {
      primary: "bg-blue-50 read-only:bg-blue-50",
      info: "bg-cyan-50 read-only:bg-cyan-50",
      warning: "bg-yellow-50 read-only:bg-yellow-50",
      success: "bg-green-50 read-only:bg-green-50",
      destructive: "bg-red-50 read-only:bg-red-50",
    };
    compoundClasses = flatColorMap[color] || "";
  }

  if (variant === "faded") {
    const fadedColorMap: Partial<Record<InputColor, string>> = {
      primary: "bg-blue-50 border-blue-300 read-only:bg-blue-50",
      info: "bg-cyan-50 border-cyan-300",
      warning: "bg-yellow-50 border-yellow-300",
      success: "bg-green-50 border-green-300",
      destructive: "bg-red-50 border-red-300",
    };
    compoundClasses = fadedColorMap[color] || "";
  }

  return cn(
    baseClasses,
    colorClasses[color],
    variantClasses[variant],
    sizeClasses[size],
    radiusClasses[radius],
    shadowClasses[shadow],
    compoundClasses
  );
};

// Função para gerar classes do label
const getLabelClasses = ({
  color = "default",
  size = "md",
  isRequired = false
}: {
  color?: InputColor;
  size?: InputSize;
  isRequired?: boolean;
}): string => {
  const baseClasses = "block font-medium transition-colors duration-200 mb-1.5";

  const colorClasses: Record<InputColor, string> = {
    default: "text-gray-700",
    primary: "text-blue-600",
    info: "text-cyan-600",
    warning: "text-yellow-600",
    success: "text-green-600",
    destructive: "text-red-600",
  };

  const sizeClasses: Record<InputSize, string> = {
    sm: "text-xs mb-1",
    md: "text-sm mb-1.5",
    lg: "text-sm mb-1.5",
    xl: "text-base mb-2",
  };

  const requiredClasses = isRequired ? "after:content-['*'] after:text-red-500 after:ml-1" : "";

  return cn(
    baseClasses,
    colorClasses[color],
    sizeClasses[size],
    requiredClasses
  );
};

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  removeWrapper?: boolean;
  color?: InputColor;
  variant?: InputVariant;
  radius?: Radius;
  shadow?: Shadow;
  size?: InputSize; // Nossa versão customizada do size
  // Novas props para label
  label?: string;
  labelClassName?: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    type,
    size = "md",
    color = "default",
    radius = "md",
    variant = "bordered",
    shadow = "none",
    removeWrapper = false,
    // Novas props
    label,
    labelClassName,
    helperText,
    errorMessage,
    isRequired = false,
    ...props
  }, ref) => {

    const inputElement = (
      <input
        type={type}
        className={cn(
          getInputClasses({
            color: errorMessage ? "destructive" : color,
            size,
            radius,
            variant,
            shadow
          }),
          className
        )}
        ref={ref}
        aria-required={isRequired}
        aria-invalid={!!errorMessage}
        aria-describedby={helperText || errorMessage ? `${props.id || 'input'}-description` : undefined}
        {...props}
      />
    );

    // Se removeWrapper for true, retorna apenas o input (comportamento original)
    if (removeWrapper) {
      return inputElement;
    }

    // Se não tem label, mantém o comportamento original
    if (!label) {
      return (
        <div className="flex-1 w-full">
          {inputElement}
        </div>
      );
    }

    // Comportamento novo: com label
    return (
      <div className="flex-1 w-full">
        <label
          htmlFor={props.id}
          className={cn(
            getLabelClasses({
              color: errorMessage ? "destructive" : color,
              size,
              isRequired
            }),
            labelClassName
          )}
        >
          {label}
        </label>

        {inputElement}

        {(helperText || errorMessage) && (
          <div
            id={`${props.id || 'input'}-description`}
            className={cn(
              "mt-1.5 text-xs",
              errorMessage ? "text-red-600" : "text-gray-500"
            )}
          >
            {errorMessage || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

