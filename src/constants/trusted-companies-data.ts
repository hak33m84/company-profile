import AdobeIcon from '../../public/Icons/trustedby-adobe.svg';
import AirBnbIcon from '../../public/Icons/trustedby-airbnb.svg';
import DatabricksIcon from '../../public/Icons/trustedby-databricks.svg';
import DropboxIcon from '../../public/Icons/trustedby-dropbox.svg';
import NetflixIcon from '../../public/Icons/trustedby-netflix.svg';
import PayPalIcon from '../../public/Icons/trustedby-paypal.svg';
import PostmanIcon from '../../public/Icons/trustedby-postman.svg';
import UpworkIcon from '../../public/Icons/trustedby-upwork.svg';
import ZoomIcon from '../../public/Icons/trustedby-zoom.svg';

type TrustedCompaniesData = {
  src: string;
  alt: string;
};

export const trustedCompaniesData: TrustedCompaniesData[] = [
  { src: AdobeIcon, alt: 'Adobe' },
  { src: AirBnbIcon, alt: 'AirBnb' },
  { src: DropboxIcon, alt: 'Dropbox' },
  { src: DatabricksIcon, alt: 'Databricks' },
  { src: NetflixIcon, alt: 'Netflix' },
  { src: PostmanIcon, alt: 'Postman' },
  { src: PayPalIcon, alt: 'PayPal' },
  { src: UpworkIcon, alt: 'Upwork' },
  { src: ZoomIcon, alt: 'Zoom' },
];
