import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeatureSection';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: ['Manipal University Jaipur', 'MUJ', 'international students', 'campus resources', 'student platform'],
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
  };
}
  
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}

