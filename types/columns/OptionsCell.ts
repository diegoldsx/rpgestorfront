"use client";

type Option<T = string> = {
	label: string;
	value: T;
};

type OptionsCellProps<T = string> = {
	value: T;
	options: Option<T>[];
};
