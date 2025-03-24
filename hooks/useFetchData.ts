import { useEffect, useState } from "react";

export function useFetchData<T>(
	id: string | undefined,
	fetcher: (id: string) => Promise<T> | T
) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<unknown>(null);

	useEffect(() => {
		if (!id) {
			setData(null);
			setLoading(false);
			return;
		}

		let mounted = true;
		setLoading(true);

		const load = async () => {
			try {
				const result = await Promise.resolve(fetcher(id));
				if (mounted) setData(result);
			} catch (err) {
				if (mounted) setError(err);
			} finally {
				if (mounted) setLoading(false);
			}
		};

		load();

		return () => {
			mounted = false;
		};
	}, [id]);

	return { data, loading, error };
}
