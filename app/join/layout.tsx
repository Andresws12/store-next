import style from "./layout.module.scss";

export default function JoinLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`min-h-screen flex items-center justify-center p-4 ${style.layout}`}
    >
      {children}
    </main>
  );
}
