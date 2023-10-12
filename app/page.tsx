import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800">
        <div className="text-center my-4">
          <h1>Panel</h1>
        </div>

        <div>
          <Link
            href="/singin"
            className="bg-slate-900 my-4 p-3 rounded-lg block"
          >
            Iniciar Sesión
          </Link>
        </div>
        <div>
          <Link
            href="/singup"
            className="bg-slate-900 my-4 p-3 rounded-lg block"
          >
            Registrarme
          </Link>
        </div>
        <div>asda</div>
      </div>
    </main>
  );
}
