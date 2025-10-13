import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Campus Map - MUJ International',
    description: 'Interactive map of Manipal University Jaipur campus.',
  };
}

export default function MapPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Campus Map</h1>
      <p className="text-muted-foreground">Interactive map coming soon...</p>
    </div>
  );
}

