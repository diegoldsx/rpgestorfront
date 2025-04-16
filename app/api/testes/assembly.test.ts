import { describe, it, expect, afterEach, beforeEach } from "vitest";
import {
  GET as getAssemblies,
  POST as postAssembly,
  PUT as putAssembly,
  DELETE as deleteAssembly,
} from "../assemblies/route";
import { db } from "../../lib/backend";

const BASE_URL = "http://localhost/api/assemblies";

const createRequest = (method: string, url = BASE_URL, body?: any) => {
  const init: RequestInit = { method };
  if (body) {
    init.body = JSON.stringify(body);
    init.headers = { "Content-Type": "application/json" };
  }
  return new Request(url, init);
};

describe("Assemblies", () => {
  const initialData = [...db.assemblies.getAll()];

  beforeEach(() => {
    db.assemblies.getAll().length = 0;
    initialData.forEach((item) => db.assemblies.create(item));
  });

  afterEach(() => {
    db.assemblies.getAll().length = 0;
    initialData.forEach((item) => db.assemblies.create(item));
  });

  describe("GET", () => {
    it("retorna todos", async () => {
      const res = await getAssemblies(createRequest("GET"));
      const json = await res.json();
      expect(res.status).toBe(200);
      expect(Array.isArray(json)).toBe(true);
    });

    it("retorna por ID", async () => {
      const id = db.assemblies.getAll()[0].id;
      const res = await getAssemblies(createRequest("GET", `${BASE_URL}?id=${id}`));
      const json = await res.json();
      expect(res.status).toBe(200);
      expect(json.id).toBe(id);
    });

    it("retorna 404 se não encontrar", async () => {
      const res = await getAssemblies(createRequest("GET", `${BASE_URL}?id=nao-existe`));
      expect(res.status).toBe(404);
    });
  });

  describe("POST", () => {
    it("cria um item", async () => {
      const newItem = { id: "assembly-2", name: "Nova Assembleia", status: "active" };
      const res = await postAssembly(createRequest("POST", BASE_URL, newItem));
      const json = await res.json();
      expect(res.status).toBe(201);
      expect(json.id).toBe("assembly-2");
    });
  });

  describe("PUT", () => {
    it("atualiza item existente", async () => {
      const original = db.assemblies.getAll()[0];
      const res = await putAssembly(createRequest("PUT", BASE_URL, { id: original.id, name: "Atualizado" }));
      const json = await res.json();
      expect(res.status).toBe(200);
      expect(json.name).toBe("Atualizado");
    });

    it("retorna 400 se id não for enviado", async () => {
      const res = await putAssembly(createRequest("PUT", BASE_URL, { name: "Sem ID" }));
      expect(res.status).toBe(400);
    });

    it("retorna 404 se item não for encontrado", async () => {
      const res = await putAssembly(createRequest("PUT", BASE_URL, { id: "nao-existe", name: "Nada" }));
      expect(res.status).toBe(404);
    });
  });

  describe("DELETE", () => {
    it("deleta item existente", async () => {
      const id = db.assemblies.getAll()[0].id;
      const res = await deleteAssembly(createRequest("DELETE", `${BASE_URL}?id=${id}`));
      expect(res.status).toBe(200);
    });

    it("retorna 404 se item não for encontrado", async () => {
      const res = await deleteAssembly(createRequest("DELETE", `${BASE_URL}?id=nao-existe`));
      expect(res.status).toBe(404);
    });

    it("retorna 400 se id não for informado", async () => {
      const res = await deleteAssembly(createRequest("DELETE", BASE_URL));
      expect(res.status).toBe(400);
    });
  });
});
