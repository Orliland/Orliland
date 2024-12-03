const SocialLink = ({ link, icon, alt }) => {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        className="block rounded-full bg-black p-2 hover:cursor-pointer hover:bg-purple"
      >
        <img src={icon} alt={alt} className="h-5 w-5" />
      </a>
    </li>
  );
};

export default SocialLink;
