import { usePathname } from "next/navigation";

export default function ProductPage({params}: {params: {id: string}}) {
    const pathname = usePathname();
    const locale = pathname.split("/")[1] || "en"; // Extract locale from the path

    const translations: { [key: string]: string } = {
        en: `Product ${params.id}`,
        fr: `Produit ${params.id}`,
        de: `Produkt ${params.id}`,
    };

    return (
        <div>
            <h1>{translations[locale]}</h1>
        </div>
    );
}