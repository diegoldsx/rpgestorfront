
export async function postData<T>(url: string, body: any): Promise<T> {


  const newId = Date.now().toFixed().toString().substring(8);


  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, id: newId }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Erro na resposta:", res.status, errorText);
    throw new Error("Erro ao criar");
  }

  return res.json();
}


export async function putData<T>(url: string, body: any): Promise<T> {
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Erro ao atualizar");
  return res.json();
}

export async function deleteData<T>(url: string): Promise<T> {
  const res = await fetch(url, { method: "DELETE" });
  if (!res.ok) throw new Error("Erro ao deletar");
  return res.json();
}

export function getRandomID() {
  return Math.random().toString()
}
