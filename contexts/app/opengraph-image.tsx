import { ogContentType, ogSize, personName, renderOgImage } from './_og/OgImage';
import content from '../content/content.json';

export const alt = `${personName}: Freelance React & Next.js Developer, Peterborough UK`;
export const size = ogSize;
export const contentType = ogContentType;

const [first, ...rest] = personName.split(' ');

export default function OpenGraphImage() {
  return renderOgImage({
    label: content.home?.titles?.[0] || 'Full Stack Engineer',
    title: first,
    accent: rest.join(' '),
    description: 'betch final yr studnet with hand on skills like typescript and java through personal project.',
    chips: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Cloud'],
    render: 'astronaut',
  });
}
