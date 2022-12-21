import { Icon } from './Util/convertor';
import { IconLogoGlyphMd } from '@stackoverflow/stacks-icons';

const Footer = () => {
  return (
    <div>
      <div>{Icon(IconLogoGlyphMd)}</div>
      <div>
        <div>STACK OVERFLOW</div>
        <div>
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.10.28.42999
        </div>
      </div>
      <div>
        <a href='/'>Questions</a>
        <a href='https://stackoverflow.com/help'>Help</a>
      </div>
    </div>
  );
};

export default Footer;
