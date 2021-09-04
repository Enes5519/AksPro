import dynamic from "next/dynamic";

const Link = dynamic(() => import("next/link"));

const WithLink = ({ useRouter, href, children }) => {
  if (useRouter) {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default WithLink;
