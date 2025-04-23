import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FileUpload from "../components/FileUpload";

function createMockFile(content = "name,email\nJohn,john@example.com", name = "file.csv") {
  return new File([content], name, { type: "text/csv" });
}

describe("FileUpload", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("lê o conteúdo do arquivo e dispara onload corretamente", () => {
    const fileContent = "name,email\nJohn,john@example.com";
    const file = createMockFile(fileContent);

    // mock para capturar a função de onload
    let onLoadCallback: (e: ProgressEvent<FileReader>) => void = () => { };

    const readAsTextMock = vi.fn();
    const addEventListenerMock = vi.fn((event, cb) => {
      if (event === "load") {
        onLoadCallback = cb;
      }
    });

    // simula o FileReader
    vi.stubGlobal("FileReader", vi.fn(() => ({
      readAsText: readAsTextMock,
      addEventListener: addEventListenerMock
    })));

    render(<FileUpload />);
    const input = screen.getByLabelText(/selecione um arquivo/i);
    const button = screen.getByRole("button", { name: /enviar/i });

    fireEvent.change(input, { target: { files: [file] } });
    fireEvent.click(button);

    expect(readAsTextMock).toHaveBeenCalledWith(file);

    // simula evento de leitura do conteúdo
    onLoadCallback({ target: { result: fileContent } } as ProgressEvent<FileReader>);
    // você pode adicionar um expect para verificar se algo foi feito com o conteúdo aqui
  });
});
