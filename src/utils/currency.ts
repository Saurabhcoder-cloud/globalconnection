export function isIndiaUser(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;

  const languageMatches = navigator.languages?.some(lang => /-IN$/i.test(lang)) || /-IN$/i.test(navigator.language || '');

  const timeZone = Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone;
  const timeZoneMatches = timeZone === 'Asia/Kolkata';

  return Boolean(languageMatches || timeZoneMatches);
}

export function getPlanPrice(
  plan: { inr: number; usd: number; currency?: string },
  useInr: boolean
): string {
  const formatter = new Intl.NumberFormat('en-US');
  if (useInr && plan.inr) {
    return `₹${formatter.format(plan.inr)}`;
  }
  return `$${formatter.format(plan.usd)}`;
}
