import Copyright from "./Copyright";
import FooterList from "./FooterList";
import Logo from "./Logo";
import SocialMediaLinks from "./SocialMediaLinks";

function Footer() {
  return (
    <footer className="xs:py-7 flex justify-center gap-8 bg-yellow-700 py-5 text-amber-50 sm:gap-20 sm:py-10">
      <div className="space-y-3">
        <div className="text-xl font-light">
          <Logo />
        </div>
        <Copyright />
        <SocialMediaLinks />
      </div>

      <FooterList
        title="Products"
        linksArr={["Tables", "Chairs", "Sofa", "Wardrobe"]}
      />
      <FooterList
        title="Company"
        linksArr={["About", "Careers", "Contact us"]}
      />
    </footer>
  );
}

export default Footer;
