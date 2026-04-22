import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-[clamp(6rem,20vw,12rem)] font-light leading-none tracking-tight text-gradient">
        404
      </h1>
      <p className="mt-4 text-xl text-white/60">Página no encontrada</p>
      <p className="mt-2 max-w-md text-white/40">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
