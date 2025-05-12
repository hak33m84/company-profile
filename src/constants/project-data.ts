import { StaticImageData } from 'next/image';

import project1Src from '../../public/Images/Porto-1.jpg';
import project2Src from '../../public/Images/Porto-2.jpg';
import project3Src from '../../public/Images/Porto-3.jpg';

type Project = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
};

export const projectsData: Project[] = [
  {
    imageSrc: project1Src,
    name: 'Company Profile',
    description: '2025',
  },
  {
    imageSrc: project2Src,
    name: 'Portofolio',
    description: '2025',
  },
  {
    imageSrc: project3Src,
    name: 'Blog Website',
    description: '2025',
  },
];
