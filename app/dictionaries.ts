import 'server-only';

const dictionaries = {
	en: () => import('./dictionaries/en.json').then((m) => m.default),
	pt: () => import('./dictionaries/pt.json').then((m) => m.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => {

};
