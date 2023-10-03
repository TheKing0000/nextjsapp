import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-dark-100">
      {children}
    </main>
  );
}
