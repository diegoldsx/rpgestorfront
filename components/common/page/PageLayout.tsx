"use client";

import { HeadingPages } from "../heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


export type HeaderActions = {
  primary?: {
    text: string;
    href: string;
  };
  secondary?: {
    text: string;
    href: string;
  };
}

interface PageLayoutProps {
  title: string;
  breadcrumbs?: {
    title: string;
    href: string;
  };

  children: React.ReactNode;
  headerActions?: HeaderActions;
}

export function PageLayout({
  title,
  breadcrumbs = {
    title: title,
    href: "#"
  },
  children,
  headerActions
}: PageLayoutProps) {

  return (
    <Card>
      <CardHeader>
        <HeadingPages
          title={title}
          breadcrumbs={breadcrumbs}
          actions={headerActions}
        />
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
