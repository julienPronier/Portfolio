import Script from "next/script"

export default function Home() {
return (
    <main>
        <a href="/">Retour au CV</a>
        <br />
        <br />
        <p>Next.js est éco-responsable grâce à plusieurs caractéristiques. Il prend en charge le rendu côté serveur (SSR) et le pré-rendu statique, réduisant ainsi la charge côté client et la consommation énergétique. Les optimisations automatiques, telles que le code splitting, contribuent à des performances efficaces. Fast Refresh minimise le besoin de rechargement complet lors du développement. Next.js favorise l'utilisation de technologies modernes et intègre des solutions pour réduire le transfert de données. De plus, il supporte des outils de mise en cache, contribuant à des applications web plus économes en énergie. La responsabilité de concevoir des applications respectueuses de l'environnement incombe également aux développeurs.</p>
        <br />
        <p>J'ai décider de mettre un thème sombre pour la consomation énergétique, de faire simple rapide dans le dév, mes images sont en basse qualité pour compenser l'impact, et j'ai utiliser des balises br.</p>
    </main>
)
}