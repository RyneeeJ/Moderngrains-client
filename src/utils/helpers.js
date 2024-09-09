export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "PHP" }).format(
    value,
  );
// Trick?? to scroll back to top when clicking react router Links
export const scrollToTop = () => window.scrollTo(0, 0);

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const locale = navigator.language;
  return new Intl.DateTimeFormat(locale, {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};
