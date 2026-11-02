import { ogContentType, ogSize, renderOgImage } from '@/app/_og/OgImage';

export const alt = 'Gaurav Mishra work experience at Ministry of Panchayati Raj, Atldo Tech and Brainwave Matrix';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    index: '02',
    label: 'Experience',
    title: 'Work',
    accent: 'experience',
    description:
      'I am a final year B.tech student with a strong foundation in computer science and a passion for building innovative web applications. I have hands-on experience in developing full-stack applications using React, Next.js, TypeScript, Node.js, and cloud platforms.',
    render: 'satellite',
  });
}
