function FooterList({ title, linksArr }) {
  return (
    <div className="space-y-3 font-light">
      <p className="text-xs xs:text-base sm:text-xl">{title}</p>
      <ul className="space-y-[2px] text-[8px] text-footerDarkFont xs:text-[12px] sm:text-[14px]">
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
