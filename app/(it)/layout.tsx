import RootShell, { buildMetadata } from "@/components/RootShell";

export const metadata = buildMetadata("it");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="it">{children}</RootShell>;
}
