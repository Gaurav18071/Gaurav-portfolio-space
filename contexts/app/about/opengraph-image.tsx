import { ogContentType, ogSize, renderOgImage } from '@/app/_og/OgImage';

export const alt = 'About Gaurav Mishra, full stack developer in New Delhi, India';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    index: '01',
    label: 'About',
    title: 'About',
    accent: 'me',
    description:
      'full stack engineer based in New Delhi, India.',
    render: 'helmet',
  });
}
