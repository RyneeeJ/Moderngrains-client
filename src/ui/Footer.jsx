import Copyright from "./Copyright";
import FooterCompany from "./FooterCompany";
import FooterProducts from "./FooterProducts";
import Logo from "./Logo";
import SocialMediaLinks from "./SocialMediaLinks";

function Footer() {
  return (
    <footer className="flex h-40 justify-center gap-8 bg-yellow-700 px-6 py-5 text-amber-50">
      <div className="space-y-3">
        <div className="text-xl font-light">
          <Logo />
        </div>
        <Copyright />
        <SocialMediaLinks />
      </div>

      <FooterProducts />

      <FooterCompany />
    </footer>
  );
}

export default Footer;
