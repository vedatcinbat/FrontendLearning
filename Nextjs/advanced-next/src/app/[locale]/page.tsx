// app/[locale]/page.tsx
import { usePathname } from 'next/navigation';

export default function HomePage() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en'; // Extract locale from the path

  const translations: { [key: string]: string } = {
    en: "Welcome to the Homepage",
    fr: "Bienvenue sur la page d'accueil",
    de: "Willkommen auf der Homepage"
  };

  return (
    <div>
      <h1>{translations[locale]}</h1>
    </div>
  );
}
