import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { CalendarCheck, MessageCircle, Trash2, PhoneCall, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import {
  type Reservation,
  getReservations,
  saveReservation,
  removeReservation,
} from "@/lib/reservations";

const serviceOptions = services.map((s) => s.title);

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(iso: string) {
  try {
    return new Date(`${iso}T00:00:00`).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function buildWhatsappMessage(r: Omit<Reservation, "id" | "createdAt">) {
  const lines = [
    "Bonjour MAISON LAVISH ✨",
    "Je souhaite prendre rendez-vous :",
    "",
    `• Service : ${r.service}`,
    `• Date souhaitée : ${formatDate(r.date)}`,
    `• Heure souhaitée : ${r.time}`,
    `• Nom : ${r.name}`,
    `• Téléphone : ${r.phone}`,
  ];
  if (r.note?.trim()) lines.push(`• Précision : ${r.note.trim()}`);
  lines.push("", "Merci de me confirmer la disponibilité 🙏");
  return lines.join("\n");
}

export function ReservationPage() {
  const [params] = useSearchParams();
  const preselected = params.get("service");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(
    preselected && serviceOptions.includes(preselected) ? preselected : serviceOptions[0],
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>(() => getReservations());

  const minDate = useMemo(() => todayISO(), []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !service || !date || !time) {
      setError("Merci de remplir tous les champs obligatoires.");
      return;
    }
    setError(null);

    const draft = { name: name.trim(), phone: phone.trim(), service, date, time, note };
    const reservation: Reservation = {
      ...draft,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
    };

    setReservations(saveReservation(reservation));

    const message = buildWhatsappMessage(draft);
    window.open(`${site.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noreferrer");

    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setNote("");
  }

  function handleRemove(id: string) {
    setReservations(removeReservation(id));
  }

  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-cream sm:pt-40">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blush/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-light/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-light">
            <Sparkles size={14} />
            Réservation
          </span>
          <h1 className="mt-5 font-display text-3xl tracking-tight text-cream sm:text-4xl md:text-5xl">
            Prends ton rendez-vous
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Remplis le formulaire ci-dessous : ta demande s'ouvre directement dans WhatsApp,
            il ne te reste qu'à l'envoyer à notre équipe pour confirmation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-3xl border border-gold/10 bg-white p-6 shadow-sm shadow-ink/5 sm:p-8 lg:col-span-3"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                Nom complet <span className="text-gold-dark">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ton nom et prénom"
                className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                Téléphone <span className="text-gold-dark">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="6XX XX XX XX"
                className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                Service souhaité <span className="text-gold-dark">*</span>
              </label>
              <select
                id="service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition focus:border-gold"
              >
                {serviceOptions.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-ink">
                  Date souhaitée <span className="text-gold-dark">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  min={minDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-ink">
                  Heure souhaitée <span className="text-gold-dark">*</span>
                </label>
                <input
                  id="time"
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition focus:border-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="note" className="mb-1.5 block text-sm font-medium text-ink">
                Précisions (optionnel)
              </label>
              <textarea
                id="note"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Une info à partager avant ta séance ?"
                className="w-full resize-none rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition focus:border-gold"
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-medium text-white transition hover:brightness-95"
            >
              <MessageCircle size={18} /> Envoyer ma demande sur WhatsApp
            </button>

            <p className="text-center text-xs text-ink-soft">
              Tu peux aussi réserver via notre{" "}
              <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="underline">
                calendrier en ligne
              </a>{" "}
              ou nous{" "}
              <a href={site.phoneHref} className="underline">
                appeler
              </a>
              .
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-gold/10 bg-white p-6 shadow-sm shadow-ink/5 sm:p-8">
              <h2 className="font-display text-xl text-ink">Mes réservations</h2>
              <p className="mt-1 text-sm text-ink-soft">
                Enregistrées sur cet appareil, après envoi sur WhatsApp.
              </p>

              {reservations.length === 0 ? (
                <p className="mt-6 rounded-2xl bg-cream-dark/60 p-5 text-center text-sm text-ink-soft">
                  Tu n'as pas encore de demande en cours.
                </p>
              ) : (
                <ul className="mt-6 flex flex-col gap-4">
                  {reservations.map((r) => (
                    <li
                      key={r.id}
                      className="rounded-2xl border border-gold/10 bg-cream p-4 text-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-ink">{r.service}</p>
                          <p className="mt-1 text-ink-soft">
                            {formatDate(r.date)} · {r.time}
                          </p>
                          {r.note && <p className="mt-1 text-xs text-ink-soft/80">« {r.note} »</p>}
                        </div>
                        <button
                          type="button"
                          aria-label="Retirer de ma liste"
                          onClick={() => handleRemove(r.id)}
                          className="shrink-0 rounded-full p-1.5 text-ink-soft/60 transition hover:bg-blush-light hover:text-ink"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
                        <CalendarCheck size={12} /> Demande envoyée
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-6 rounded-3xl bg-ink p-6 text-cream sm:p-8">
              <p className="font-display text-lg">Besoin d'aide ?</p>
              <p className="mt-2 text-sm text-cream/70">
                Notre équipe est disponible pour toute question avant ta réservation.
              </p>
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-2.5 text-sm font-medium transition hover:bg-cream/10"
              >
                <PhoneCall size={15} /> {site.phoneDisplay}
              </a>
            </div>

            <Link
              to="/"
              className="mt-6 inline-block text-sm font-medium text-gold-dark underline underline-offset-4"
            >
              ← Retour à l'accueil
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
