import { Fragment } from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { NeighborhoodBreadcrumbCrumb } from "@/components/neighborhoods/structuredData";

function toHref(url: string): string {
  if (url === "https://myfence.com" || url === "https://myfence.com/") return "/";
  const path = url.replace(/^https:\/\/myfence\.com/, "");
  return path.startsWith("/") ? path : `/${path}`;
}

export default function NeighborhoodBreadcrumb({
  items,
}: {
  items: NeighborhoodBreadcrumbCrumb[];
}) {
  return (
    <Breadcrumb className="mb-6 max-w-full">
      <BreadcrumbList>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <Fragment key={`${item.name}-${index}`}>
              {index > 0 ? <BreadcrumbSeparator /> : null}
              <BreadcrumbItem className="max-w-full">
                {last ? (
                  <BreadcrumbPage className="break-words">{item.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={toHref(item.url)} className="break-words">
                      {item.name}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
