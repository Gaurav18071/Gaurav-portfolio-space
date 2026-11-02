import { ogContentType, ogSize, renderOgImage } from '@/app/_og/OgImage';

export const alt = 'Contact Gaurav Mishra, full stack developer & SDE intern';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    index: '05',
    label: 'Contact',
    title: 'Let’s',
    accent: 'connect',
    description:
      'Available for internships and project works in India or remote.',
    render: 'rocket',
  });
}
