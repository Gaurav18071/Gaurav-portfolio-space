import { Experience } from 'components/Experience/Experience';
import { PageJsonLd } from 'components/Seo/PageJsonLd';

import { getPageContent } from 'utils/serverUtils';
import { pageMetadata } from 'utils/seo';

import { ResumeData } from '@/types';

import type { Metadata } from 'next';

const title = 'Experience: React, Next.js & Cloud';
const description =
  'I am a final year B.Tech student with a strong foundation in computer science and a passion for building innovative web applications. I have hands-on experience in developing full-stack applications using React, Next.js, TypeScript, Node.js, and cloud platforms.';

export const metadata: Metadata = pageMetadata({ path: '/experience', title, description });

export default async function ExperiencePage() {
  const pageData: ResumeData = await getPageContent();
  const { experience } = pageData;

  return (
    <>
      <PageJsonLd path="/experience" name="Experience" description={description} />
      <Experience experience={experience} />
    </>
  );
}
