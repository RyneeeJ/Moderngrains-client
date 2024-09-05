function FooterList({ title, linksArr }) {
  return (
    <div className="space-y-3 font-light">
      <p className="xs:text-base text-xs sm:text-xl">{title}</p>
      <ul className="xs:text-[12px] text-footerDarkFont space-y-[2px] text-[8px] sm:text-[14px]">
        {linksArr.map((link, i) => (
          <li key={i} className="cursor-pointer hover:underline">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
