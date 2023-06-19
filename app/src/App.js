import logo from './logo.png';

function App() {
  return (
    <div>
      <div className="container mx-auto py-6">
        <img id="logo" className="w-28 mx-auto" src={logo} alt="logo" />

        <h1 className="text-3xl text-center mb-40">cercle.studio</h1>
        <h2 className="text-7xl text-center mb-60">Nous créons des produits sur-mesure,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">propulsés par l'IA</span><span className="text-5xl">.</span></h2>



        <h3 className="text-center text-4xl mb-10 font-bold">Nos services</h3>

        <div className="grid grid-cols-3 mb-40 gap-12 text-justify">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h4 className="text-xl card-title text-purple-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>Consulting en IA</h4>
              <p className="text-lg">Nous analysons votre activité et vos données afin de vous aider à définir votre stratégie IA.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h4 className="text-xl card-title text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg> Création de MVP</h4>
              <p className="text-lg">Nous créons des logiciels qui utilisent l'IA afin d'automatiser les tâches répétitives, optimiser les process et accélérer la prise de décision. Pour cela, nous intégrons notamment des modèles avancés d'IA générative tels que GPT (ChatGPT) et Stable Diffusion.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h4 className="text-xl card-title text-blue-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> Développement de modèles IA</h4>
              <p className="text-lg">Nous pouvons développer un modèle IA spécialement pour vous. Cela inclut la création du dataset (avec des données ouvertes ou les votres), sa préparation, l'entrainement et le paramétrage du modèle, afin de fournir des résultats fiables.</p>
            </div>
          </div>
        </div>
      </div>

      <div data-theme="light" className="bg-slate-50">
        <div className="container mx-auto py-6">

          <h3 className="text-center text-4xl mt-20 mb-10 font-bold">Nos derniers projets</h3>

          <div className="grid grid-cols-2 mb-40 gap-12 text-justify">
          <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src="/histoires-infinies-mobile.png" alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Histoires Infinies</h2>
                <p>Histoires Infinies est une application mobile qui permet aux enfants de tous âges de créer des histoires en choisissant un personnage, un lieu et une aventure. L'histoire est générée grâce à GPT et narrée par un système de synthèse vocale. La combinaison de 20 personnages, 20 lieux et 10 types d'aventures donne lieu à des milliers de possibilités.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-primary">#Mobile</div>
                  <div className="badge badge-outline badge-primary">#GPT</div>
                  <div className="badge badge-outline badge-primary">#TextToSpeech</div>
                  <div className="badge badge-outline badge-primary">#Android</div>
                  <div className="badge badge-outline badge-primary">#iOS</div>
                  <div className="badge badge-outline badge-primary">#React</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure>
              <img src="/firewatch.png" alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Firewatch
                </h2>
                <p>Firewatch est une IA qui détecte, en temps quasi réel, les principaux incendies à l'échelle mondiale afin d'alerter sur le réchauffement climatique. Utilisant les images des satellites Sentinel-2, elle s'appuie sur le modèle de détection d'objets YOLOv5, entraîné sur un dataset créé par nos soins. Les détections sont partagées sur Twitter pour une diffusion rapide, tandis qu'un tableau de bord permet d'avoir une vision globale.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-primary">#SatelliteImagery</div>
                  <div className="badge badge-outline badge-primary">#ComputerVision</div>
                  <div className="badge badge-outline badge-primary">#YOLOv5</div>
                  <div className="badge badge-outline badge-primary">#AWS</div>
                  <div className="badge badge-outline badge-primary">#Python</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src="/pyko-analytics.png" alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Pyko Analytics</h2>
                <p>Firewatch est une IA qui détecte, en temps quasi réel, les principaux incendies à l'échelle mondiale afin d'alerter sur le réchauffement climatique. Utilisant les images des satellites Sentinel-2, elle s'appuie sur le modèle de détection d'objets YOLOv5, entraîné sur un dataset créé par nos soins. Les détections sont partagées sur Twitter pour une diffusion rapide, tandis qu'un tableau de bord permet d'avoir une vision globale.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-primary">#Insights</div>
                  <div className="badge badge-outline badge-primary">#Salesforce</div>
                  <div className="badge badge-outline badge-primary">#Graphs</div>
                  <div className="badge badge-outline badge-primary">#GPT</div>
                  <div className="badge badge-outline badge-primary">#React</div>
                  <div className="badge badge-outline badge-primary">#RubyOnRails</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src="/stonkgpt.png" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">StonkGPT</h2>
                <p>StonkGPT est un logiciel qui offre des recommandations pour l'achat et la vente à découvert d'actions d'entreprises cotées à la bourse de Paris. S'appuyant sur un récent <a className="text-purple-600 underline" target="_blank" rel="noreferrer" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4412788">article scientifique</a>, il exploite la capacité du modèle GPT à analyser les articles de presse afin d'en déduire l'impact probable sur le marché des actions.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-primary">#Actions</div>
                  <div className="badge badge-outline badge-primary">#Recherche</div>
                  <div className="badge badge-outline badge-primary">#SentimentAnalysis</div>
                  <div className="badge badge-outline badge-primary">#Python</div>
                  <div className="badge badge-outline badge-primary">#GPT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto py-24">
        <h3 className="text-4xl text-center mb-8">Une idée ou un projet en tête ?</h3>
        <div className="text-center">
          <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://meetings.hubspot.com/cercle-studio">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            Programmer un appel
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
