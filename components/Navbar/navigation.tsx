import Link from 'next/link';

type LProps = {
  link: any;
  title: string;
};
const navs = [
  { title: 'Recent Words', path: '/recent' },
  { title: 'Login', path: '/login' },
  { title: 'Sign Up', path: '/signup' },
];

const Navlinks = ({ link, title }: LProps) => {
  return (
    <li className="mobileUsaLink text-center">
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const Navigation = () => {
  return (
    <nav>
      {' '}
      <ul>
        {' '}
        {navs.map((nav) => {
          return (
            <Navlinks
              key={navs.indexOf(nav)}
              link={nav.path}
              title={nav.title}
            />
          );
        })}{' '}
      </ul>{' '}
    </nav>
  );
};

export default Navigation;
