import Script from "next/script"

export default function Home() {
  return (
    <main>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">Julien Pronier</h1>
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white">Bienvenue sur mon Portfolio en Ligne</h2>
      <p className="mb-4 text-lg text-gray-500 md:text-xl dark:text-gray-400">Développeur basé à <big className="dark:text-white">Arras</big>, en France.</p>
      <p className="mb-4 text-lg text-gray-500 md:text-xl dark:text-gray-400">Je suis passionné par le <big className="dark:text-white">développement informatique</big> sous toutes ses formes.</p>
      <p className="mb-4 text-lg text-gray-500 md:text-xl dark:text-gray-400">Mon langage de programmation préféré est <big className="dark:text-white">Python</big>.</p>
      <p className="mb-4 text-lg text-gray-500 md:text-xl dark:text-gray-400">Actuellement en <big className="dark:text-white">3ème année de BUT Informatique</big> à l'IUT de Lens.</p>
      <p className="mb-4 text-lg text-gray-500 md:text-xl dark:text-gray-400">Je suis à la recherche d'une <big className="dark:text-white"> alternance</big> pour l'année prochaine.</p>
      <p className="mb-4 text-lg text-gray-500 md:text-xl dark:text-gray-400">Je serai disponible à partir du 15 août 2024.</p>
    
      <div id="photo">
        <img className="profile" src="moi.png" alt="Moi après 2 jour à la salle" />
      </div>

      <p className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white p-10">Compétences</p>

      <div className="wrapper">
        <div className="containaimg" id="un">
          <a className="containimg" href="https://flask.palletsprojects.com/" target="blank">
            <img className="logo rounded-3xl" src="flask.webp" alt="" />
          </a>
          <ul>
            <li>Python Flask</li>
            <li><a className="text-sky-400" href="https://dev.renatech.org/" target="blank">Stage à l'IEMN</a></li>
          </ul>
        </div>

        <div className="containaimg" id="deux">
          <a className="containimg" href="https://angular.io/" target="blank">
            <img className="logo" src="angular.png" alt="" />
          </a>
          <ul>
            <li>Angular</li>
            <li>Différents projets de groupe</li>
          </ul>
        </div>

        <div className="containaimg" id="trois">
          <a className="containimg" href="https://laravel.com/" target="blank">
          <img className="logo" src="laravel.svg.png" alt="" />
          </a>
          <ul>
            <li>Laravel</li>
            <li>Différents projets de groupe</li>
          </ul>
        </div>
        
        <div className="containaimg" id="quatre">
          <a className="containimg" href="https://spring.io/" target="blank">
          <img className="logo" src="spring.png" alt="" />
          </a>
          <ul>
            <li>Spring</li>
            <li>Différents projets scolaires</li>
          </ul>
        </div>

        <div className="containaimg" id="cinq">
          <a className="containimg" href="https://fr.react.dev/" target="blank">
          <img className="logo" src="react.svg.png" alt="" />
          </a>
          <ul>
            <li>React</li>
            <li>Projects scolaires</li>
          </ul>
        </div>

        <div className="containaimg" id="six">
          <a className="containimg" href="https://nextjs.org/" target="blank">
          <img className="logo" src="nextjs.png" alt="" />
          </a>
          <ul>
            <li>NextJS</li>
            <li>Portfolio</li>
          </ul>
        </div>

        <div className="containaimg" id="sept">
          <a className="containimg" href="https://sql.sh/" target="blank">
          <img className="logo" src="sql.png" alt="" />
          </a>
          <ul>
            <li>SQL</li>
            <li>Utilisations dans la plupart des projets</li>
          </ul>
        </div>


        <div className="containaimg" id="huit">
          <a className="containimg" href="https://www.mongodb.com/" target="blank">
          <img className="logo" src="mongodb.svg" alt="" />
          </a>
          <ul>
            <li>MongoDB</li>
            <li>Projet scolaire</li>
          </ul>
        </div>
        <div className="containaimg" id="neuf">
          <a className="containimg" href="https://www.postgresql.org/" target="blank">
          <img className="logo" src="postgresql.svg.png" alt="" />
          </a>
          <ul>
            <li>PostgreSQL</li>
            <li>Différents projets personnel et professionnel</li>
          </ul>
        </div>
      </div>


      <p className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white p-10 mg-10 my-10">Projets</p>
      
      <div className="wrapper2">
        <div className="containaimg2" id="un2">
          <a className="containimg2" href="https://dev.renatech.org/" target="blank">
            <img className="proj" src="repotech.png" alt="Image du site repotech, site développé en python flask qui sert a la gestion de projet" />
          </a>
          <ul>
            <li>Projet Repotech</li>
            <li>J'ai pu travailler en stage sur ce logiciel web de gestion de projet scientifique développé en python-Flask</li>
            <li>J'ai aussi utiliser du JS, du PostgreSQL et du HTML/CSS lors du projet</li>
          </ul>
        </div>

        <div className="containaimg2" id="deux2">
          <img className="proj" src="ludo.png" alt="Image du site de Ludothèque" /> 
          <ul>
            <li>Projet "Vapeur" (Ludothèque)</li>
            <li></li>
            <li>Le Front est en Angular et l'API back en Laravel</li>
          </ul>
        </div>

        <div className="containaimg2" id="trois2">
          <img className="proj" src="perso1.png" alt="Image du site de Ludothèque" /> 
          <ul>
            <li>Projet personnel (Géneration)</li>
            <li></li>
            <li>Ce projet Python Flask m'a entrainer à utiliser StableDiffusion dans mes applications en plus de créations de compte et différentes features</li>
          </ul>
        </div>
      </div>

      <p className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white p-10 mg-10 my-10">Contacts</p>

      <div>
        <p className="mb-4 text-lg text-gray-500 md:text-xl dark:text-gray-400">Numéro de téléphone : </p>
        <p className="mb-4 text-lg text-gray-500 md:text-xl dark:text-gray-400">Email : </p>
        <p className="mb-4 text-lg text-gray-500 md:text-xl dark:text-gray-400"> 
          <a href="https://www.linkedin.com/in/julien-pronier/" target="blank">➔ Linkedin</a>
        </p>

      </div>

    </main>
    
  )
}
