import { StaticImageData } from 'next/image';

import iconFacebook from '../../public/Icons/icon-facebook.svg';
import iconInstagram from '../../public/Icons/icon-instagram.svg';
import iconLinkedin from '../../public/Icons/icon-linkedin.svg';
import iconTiktok from '../../public/Icons/icon-tiktok.svg';

type Icon = {
  href: string;
  src: StaticImageData;
  alt: string;
};

export const socialMediaData: Icon[] = [
  {
    href: 'https://www.facebook.com/',
    src: iconFacebook,
    alt: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/',
    src: iconInstagram,
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/',
    src: iconLinkedin,
    alt: 'LinkedIn',
  },
  {
    href: 'https://www.tiktok.com/',
    src: iconTiktok,
    alt: 'Tiktok',
  },
];
