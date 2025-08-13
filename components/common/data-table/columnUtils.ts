export const exactFilter = (row: any, columnId: string, value: string) => {
	if (!value) return true;
	const cellValue = row.getValue(columnId);
	return value.includes(cellValue);
};

// src/utils/tableUtils.ts

/**
 * Calcula a largura da coluna com base no tamanho do texto do cabeçalho.
 * @param headerText O texto do cabeçalho da coluna.
 * @param baseSize O tamanho mínimo da coluna em pixels.
 * @param charWidth O fator de multiplicação por caractere.
 */
export const getAutoColumnSize = (
  headerText: string,
  baseSize: number = 70,
  charWidth: number = 8
): number => {
  if (!headerText) {
    return baseSize;
  }
  
  // Aumenta o tamanho base com base na quantidade de caracteres
  return baseSize + (headerText.length * charWidth);
};
