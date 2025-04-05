interface SubmitButtonProps {
	isSubmitting: boolean;
	isUpdate?: boolean;
	label?: string; // ✅ adiciona isso
}

export function SubmitButton({
	isSubmitting,
	isUpdate = false,
	label = "Salvar",
}: SubmitButtonProps) {
	return (
		<button
			type="submit"
			disabled={isSubmitting}
			className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
		>
			{isSubmitting ? "Enviando..." : label}
		</button>
	);
}
