import Button from "./Button";

function HeroImage() {
  return (
    <div className="xs:px-10 xs:h-[45rem] relative z-10 h-[38rem] w-full bg-[url('/hero-img.jpg')] bg-cover bg-center px-8 py-10 before:absolute before:inset-0 before:-z-20 before:block before:bg-gradient-to-b before:from-yellow-700 before:to-neutral-300 before:opacity-30 before:content-[''] sm:px-16 md:h-[55rem] md:px-28">
      <h1 className="xs:text-4xl mt-10 text-3xl font-light text-amber-50 sm:text-5xl md:mt-20">
        Effortless elegance, <br /> purely minimal
      </h1>

      <Button
        className="absolute bottom-[3rem] right-[1.5rem] sm:bottom-[4rem] sm:right-[3rem] md:bottom-[5rem] md:right-[4rem]"
        type="hero-cta"
      >
        Shop now
      </Button>
    </div>
  );
}

export default HeroImage;
