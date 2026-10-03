// =============================================================================
// Préfixe les liens internes avec le `base` du site (import.meta.env.BASE_URL).
// - base '/'            → withBase('/prestations') = '/prestations'
// - base '/mon-depot/'  → withBase('/prestations') = '/mon-depot/prestations'
// Les liens externes (http, tel, mailto) et les ancres (#) sont laissés tels quels.
// =============================================================================
const BASE = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  if (/^([a-z]+:|#|\/\/)/i.test(path)) return path;
  const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
}
