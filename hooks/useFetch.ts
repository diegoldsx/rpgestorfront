import { useEffect, useState } from "react";

export function useFetch<T>(url?: string) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);
	useEffect(() => {
		if (!url) return;

		const baseUrl =
			typeof window !== "undefined" ? window.location.origin : "";

		setLoading(true);
		setError(null);

		fetch(`${baseUrl}${url}`)
			.then(async (res) => {
				if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
				const contentType = res.headers.get("Content-Type") || "";
				if (!contentType.includes("application/json")) {
					const text = await res.text();
					console.error("🔴 Response is not JSON:\n", text);
					throw new Error("Invalid JSON response");
				}
				return res.json();
			})
			.then((data: T) => setData(data))
			.catch(setError)
			.finally(() => setLoading(false));
	}, [url]);

	return { data, loading, error };
}
