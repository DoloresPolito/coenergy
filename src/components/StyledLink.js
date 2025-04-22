"use client";

import Link from "next/link";

export default function StyledLink({ children, link, target="_self"}) {
  return (
    <Link href={link} style={{ textDecoration: "none" }} target={target}>
      {children}
    </Link>
  );
}