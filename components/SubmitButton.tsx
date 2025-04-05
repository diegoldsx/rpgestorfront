import { Button } from "@/components/ui/button";
import { FaSpinner } from "react-icons/fa";

interface SubmitButtonProps {
	isSubmitting: boolean;
	isUpdate: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
	isSubmitting,
	isUpdate,
}) => {
	return (
		<Button className="w-32" type="submit" disabled={isSubmitting}>
			{isSubmitting ? (
				<div className="flex items-center gap-2">
					<FaSpinner className="animate-spin" />
					{isUpdate ? "Atualizando..." : "Criando..."}
				</div>
			) : isUpdate ? (
				"Atualizar"
			) : (
				"Criar"
			)}
		</Button>
	);
};
