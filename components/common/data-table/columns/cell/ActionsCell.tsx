"use client";
import Link from "next/link";
import Cell from "@/app/types/Cell";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import React from "react";

type ActionsCellProps<T> = {
	children: React.ReactNode;
};

export default function ActionsCell<T>({ children }: ActionsCellProps<T>) {
	return <div>{children}</div>;
}
