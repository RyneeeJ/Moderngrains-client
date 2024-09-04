export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "PHP" }).format(
    value,
  );
// Trick?? to scroll back to top when clicking react router Links
export const scrollToTop = () => window.scrollTo(0, 0);
