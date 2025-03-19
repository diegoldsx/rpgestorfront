import { useState, useEffect, useCallback } from "react";

export function useFetchData<T>(url: string, options?: RequestInit) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const fetchData = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(url, options);
			if (!response.ok)
				throw new Error(`Erro: ${response.status} - ${response.statusText}`);
			const result: T = await response.json();
			setData(result);
		} catch (err) {
			setError((err as Error).message);
		} finally {
			setLoading(false);
		}
	}, [url, options]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const refresh = () => fetchData();

	return { data, loading, error, refresh };
}
