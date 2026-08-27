export interface Reservation {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  note?: string;
  createdAt: string;
}

const STORAGE_KEY = "lavish-reservations";

export function getReservations(): Reservation[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveReservation(reservation: Reservation): Reservation[] {
  const current = getReservations();
  const updated = [reservation, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — reservation still gets sent via WhatsApp.
  }
  return updated;
}

export function removeReservation(id: string): Reservation[] {
  const updated = getReservations().filter((r) => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }
  return updated;
}
