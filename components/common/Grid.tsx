// components/Grid.tsx
"use client";
import React from "react";

type ResponsiveCols = never; // simplifiquei: use template string para casos avançados

export interface GridProps {
	children?: React.ReactNode;
	/** number => repeat(n, minmax(0,1fr)), string => grid-template-columns raw (ex: "repeat(auto-fit,minmax(200px,1fr))") */
	columns?: number | string;
	gap?: number | string; // px if number, otherwise css value ("1rem", "8px")
	rowGap?: number | string;
	columnGap?: number | string;
	className?: string;
	style?: React.CSSProperties;
	/** Se quiser envolver cada child (ex.: adicionar key, card wrapper, animation) */
	itemWrapper?: (child: React.ReactNode, index: number) => React.ReactNode;
	as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
	alignItems?: React.CSSProperties["alignItems"];
	justifyItems?: React.CSSProperties["justifyItems"];
}

/** util */
const normalizeGap = (v?: number | string) => (v == null ? undefined : typeof v === "number" ? `${v}px` : v);

export default function Grid({
	children,
	columns = "repeat(auto-fit, minmax(220px, 1fr))",
	gap = 16,
	rowGap,
	columnGap,
	className = "",
	style,
	itemWrapper,
	as: Tag = "div",
	alignItems = "stretch",
	justifyItems = "stretch",
}: GridProps) {
	const gridTemplateColumns = typeof columns === "number" ? `repeat(${columns}, minmax(0, 1fr))` : columns;

	const baseStyle: React.CSSProperties = {
		display: "grid",
		gridTemplateColumns,
		gap: normalizeGap(gap),
		rowGap: normalizeGap(rowGap),
		columnGap: normalizeGap(columnGap),
		alignItems,
		justifyItems,
		width: "100%",
		boxSizing: "border-box",
		...style,
	};

	const rendered = itemWrapper && children ? React.Children.map(children, (c, i) => itemWrapper(c, i)) : children;

	return (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		<Tag className={className} style={baseStyle}>
			{rendered}
		</Tag>
	);
}
