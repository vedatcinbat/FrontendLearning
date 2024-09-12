import { usePathname } from "next/navigation";

export default function AboutPage() {
    const pathname = usePathname();
    const locale = pathname.split("/")[1] || "en"; // Extract locale from the path

    const translations: { [key: string]: string } = {
        en: "About Us",
        fr: "À propos de nous",
        de: "Über uns",
    };

    return (
        <div>
            <h1>{translations[locale]}</h1>
        </div>
    );
}