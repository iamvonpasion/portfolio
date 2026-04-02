const HIRE_DATE = new Date(2008, 10); // November 2008 (month is 0-indexed)

export function yearsOfExperience(): number {
  const now = new Date();
  const years = now.getFullYear() - HIRE_DATE.getFullYear();
  const hasReachedAnniversary = now.getMonth() >= HIRE_DATE.getMonth();
  return hasReachedAnniversary ? years : years - 1;
}
