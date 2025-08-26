"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
	title: string;
	value: string;
	description: string;
	icon: LucideIcon;
	trend?: {
		value: number;
		label: string;
	};
}

export function StatsCard({ title, value, description, icon: Icon, trend }: StatsCardProps) {
	const isPositive = trend ? trend.value >= 0 : true;
	const TrendIcon = isPositive ? TrendingUp : TrendingDown;

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">{title}</CardTitle>
				<Icon className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{value}</div>
				<div className="flex items-center justify-between">
					<p className="text-xs text-muted-foreground">{description}</p>
					{trend && (
						<Badge
							variant="outline"
							className={cn(
								"text-xs",
								isPositive ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"
							)}
						>
							<TrendIcon className="w-3 h-3 mr-1" />
							{isPositive ? "+" : ""}{trend.value}%
						</Badge>
					)}
				</div>
			</CardContent>
		</Card>
	);
}