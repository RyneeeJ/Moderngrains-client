import Copyright from "./Copyright";
import FooterList from "./FooterList";
import Logo from "./Logo";
import SocialMediaLinks from "./SocialMediaLinks";

function Footer() {
  return (
    <footer className="flex justify-center gap-8 bg-yellow-700 pt-5 text-amber-50 xs:pt-7 sm:gap-20">
      <div className="space-y-3">
        <div className="text-xl font-light">
          <Logo type="light" />
        </div>
        <Copyright />
        <SocialMediaLinks />
      </div>

      <FooterList
        title="Products"
        linksArr={["Tables", "Chairs", "Sofas", "Wardrobes"]}
      />
      <FooterList
        title="Company"
        linksArr={["About", "Careers", "Contact us"]}
      />
    </footer>
  );
}

export default Footer;
