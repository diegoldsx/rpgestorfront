/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true, // Usa o SWC para minificação mais rápida

	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test instanceof RegExp && rule.test.test(".svg"));

		if (fileLoaderRule) {
			config.module.rules.push(
				{
					...fileLoaderRule,
					test: /\.svg$/i,
					resourceQuery: /url/, // *.svg?url
				},
				{
					test: /\.svg$/i,
					issuer: fileLoaderRule.issuer,
					resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
					use: ["@svgr/webpack"],
				}
			);

			fileLoaderRule.exclude = /\.svg$/i;
		}

		return config;
	},
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200], // Define tamanhos padrão para melhor otimização
		formats: ["image/avif", "image/webp"], // Usa AVIF e WebP para menor peso
		remotePatterns: [
			{ protocol: "https", hostname: "api.lorem.space" },
			{ protocol: "https", hostname: "lh3.googleusercontent.com" },
			{ protocol: "https", hostname: "a0.muscache.com" },
			{ protocol: "https", hostname: "avatars.githubusercontent.com" },
		],
	},
};

module.exports = nextConfig;
