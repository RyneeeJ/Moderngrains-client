import Button from "./Button";

function HeroImage() {
  return (
    <div className="relative z-10 h-[38rem] w-full bg-[url('/hero-img.jpg')] bg-cover bg-center px-8 py-10 before:absolute before:inset-0 before:-z-20 before:block before:bg-gradient-to-b before:from-yellow-700 before:to-neutral-300 before:opacity-30 before:content-[''] xs:h-[45rem] xs:px-10 sm:px-16 md:h-[55rem] md:px-28">
      <h1 className="mt-10 text-3xl font-light text-amber-50 xs:text-4xl sm:text-5xl md:mt-20">
        Effortless elegance, <br /> purely minimal
      </h1>

      <Button type="hero-cta">Shop now</Button>
    </div>
  );
}

export default HeroImage;
