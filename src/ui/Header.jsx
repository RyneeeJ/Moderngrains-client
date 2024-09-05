import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-amber-50">
      <div className="xs:px-5 xs:h-14 mx-auto flex h-12 max-w-6xl items-center justify-between border-b border-yellow-700 px-4 md:h-16">
        <div className="px-2">
          <Logo />
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
