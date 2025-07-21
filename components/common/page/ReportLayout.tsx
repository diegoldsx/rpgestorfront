"use client";

import { Button } from "@/components/ui/button";
import { HeadingPages } from "../heading/heading-pages";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";


interface ReportLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export function ReportPageLayout({
  title = "",
  children,
}: ReportLayoutProps) {

  return (
    <Card>
      <CardHeader>
        <HeadingPages
          title={title}
          breadcrumbs={{ title: "Relatórios", href: "/reports" }}

        />
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>

    </Card>
  );
}
