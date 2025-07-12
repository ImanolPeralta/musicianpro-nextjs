export default function Newsletter() {
  return (
    <section className="py-10 px-4 bg-[#641B1B] text-center rounded-2xl mb-9">
      <h2 className="text-2xl font-semibold mb-4 text-[#F5EFE6]">
        Suscribite para recibir ofertas exclusivas
      </h2>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Tu email"
          className="text-[#F5EFE6] px-4 py-2 rounded-xl border border-[#F5EFE6] w-full max-w-sm"
        />
        <button
          type="submit"
          className="bg-[#F5EFE6] hover:bg-[#E8DCCB] px-6 py-2 rounded-xl cursor-pointer"
        >
          Suscribirse
        </button>
      </form>
    </section>
  );
}
