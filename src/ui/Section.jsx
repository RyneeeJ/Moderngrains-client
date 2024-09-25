function Section({ children, ...props }) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12 xs:px-8 sm:px-14 sm:py-20">
      {children}
    </section>
  );
}

export default Section;
