import logo from './logo.png';

const goTo = (event) => {
  console.log('xxxx');
  event.preventDefault();
  const btn = event.currentTarget;

  const carousel = btn.parentElement.parentElement.parentElement;
          
  const href = btn.getAttribute('href');
  const target = carousel.querySelector(href);
  const left = target.offsetLeft;
  carousel.scrollTo({left: left});
};

function App() {
  return (
    <div className="font-sans">
      <div className="container mx-auto px-3 py-6">
        <h1 className="text-3xl text-center mb-32 md:mb-44 2xl:mb-52 font-mono"><img id="logo" className="w-16 inline-block" src={logo} alt="logo" /> cercle<span className="text-purple-600 text-6xl font-sans">.</span>studio</h1>
        <h2 className="text-5xl md:text-7xl text-center mb-12">Nous créons des produits sur-mesure,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">propulsés par l'IA</span></h2>

        <div class="text-center mb-52 2xl:mb-56">
          <a className="btn btn-primary mx-8 mt-4" target="_blank" rel="noreferrer" href="https://meetings-eu1.hubspot.com/meetings/cercle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            Programmer un appel
          </a>

          <a className="btn btn-info btn-outline mx-8 mt-4" target="_blank" rel="noreferrer" href="mailto:hello@cercle.studio">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Contact
          </a>
        </div>


        <h3 className="text-center text-4xl mb-3 font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg> Nos services</h3>
        <h4 className="text-center text-xl mb-20 text-slate-500">Quelle que soit l'étape à laquelle vous vous trouvez, d'une simple idée à un projet bien défini,<br/>nous sommes à vos cotés pour vous aider à concrétiser vos objectifs.</h4>

        <div className="grid grid-cols-1 lg:grid-cols-3 mb-40 gap-12 text-justify">
          <div className="card bg-base-100 shadow-xl shadow-neutral-900">
            <div className="card-body">
              <h4 className="text-2xl card-title text-purple-600 mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>Consulting en IA</h4>
              <p className="text-lg">Nous analysons votre activité et vos données afin de vous aider à définir votre stratégie en Intelligence Artificielle.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl shadow-neutral-900">
            <div className="card-body">
              <h4 className="text-2xl card-title text-blue-600 mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg> Création de MVPs</h4>
              <p className="text-lg">Nous créons des logiciels qui utilisent l'IA afin d'automatiser les tâches répétitives, optimiser les process et accélérer la prise de décision. Pour cela, nous intégrons notamment des modèles avancés d'IA générative tels que <a href="https://platform.openai.com/docs/models" rel="noreferrer" target="_blank" className="link">GPT</a> (ChatGPT) et <a href="https://stability.ai" rel="noreferrer" target="_blank" className="link">Stable Diffusion</a>.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl shadow-neutral-900">
            <div className="card-body">
              <h4 className="text-2xl card-title text-blue-200 mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> Création de modèles</h4>
              <p className="text-lg">Nous pouvons développer un modèle IA spécialement pour vous. Cela inclut la création du dataset (avec des données ouvertes ou les votres), sa préparation, l'entrainement et le paramétrage du modèle, afin de fournir des résultats fiables.</p>
            </div>
          </div>
        </div>
      </div>

      <div data-theme="light" className="bg-slate-50">
        <div className="container mx-auto px-3 py-6">

          <h3 className="text-center text-4xl mt-20 mb-3 font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg> Nos dernières réalisations</h3>
          <h4 className="text-center text-xl mb-20 text-slate-500">Applications web, mobiles, APIs...</h4>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 mb-40 gap-12 text-justify">

          <a href="https://pyko.co" target="_blank" rel="noreferrer" className="card bg-base-100 shadow-xl hover:shadow-2xl">
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img src="/pyko-analytics-1.jpg" className="w-full" alt="" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <span href="#slide2" className="btn btn-circle" onClick={goTo} >❮</span> 
                    <span href="#slide2" className="btn btn-circle" onClick={goTo} >❯</span>
                  </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                  <img src="/pyko-analytics-2.png" className="w-full" alt="" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <span href="#slide1" className="btn btn-circle" onClick={goTo} >❮</span> 
                    <span href="#slide1" className="btn btn-circle" onClick={goTo} >❯</span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title mb-2">
                  <div className="avatar mr-1">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="/pyko-analytics-icon.jpg" alt="" className="" />
                    </div>
                  </div>
                  Pyko Analytics
                </h2>
                <p className="mb-2">Pyko Analytics est une application web, conçue pour se synchroniser à votre CRM Salesforce et faciliter l'analyse de vos données. Elle génère automatiquement des graphiques pertinents pour votre activité, rendant la visualisation de votre funnel de vente plus intuitive et efficace. Le système d'insights, propulsé par GPT, analyse dynamiquement les données et met en avant les inefficacités et les opportunités sur l'ensemble du funnel de vente.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-primary">#Insights</div>
                  <div className="badge badge-outline badge-primary">#Salesforce</div>
                  <div className="badge badge-outline badge-primary">#Graphs</div>
                  <div className="badge badge-outline badge-primary">#GPT</div>
                  <div className="badge badge-outline badge-primary">#React</div>
                  <div className="badge badge-outline badge-primary">#RubyOnRails</div>
                </div>
              </div>
            </a>

            <a href="https://twitter.com/firewatchbot" target="_blank" rel="noreferrer" className="card bg-base-100 shadow-xl hover:shadow-2xl">
              <div className="carousel w-full">
                <div id="slide21" className="carousel-item relative w-full">
                  <img src="/firewatch-1.png" className="w-full" alt="" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <span href="#slide23" className="btn btn-circle" onClick={goTo} >❮</span> 
                    <span href="#slide22" className="btn btn-circle" onClick={goTo} >❯</span>
                  </div>
                </div>
                <div id="slide22" className="carousel-item relative w-full">
                  <img src="/firewatch-2.png" className="w-full" alt="" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <span href="#slide21" className="btn btn-circle" onClick={goTo} >❮</span> 
                    <span href="#slide23" className="btn btn-circle" onClick={goTo} >❯</span>
                  </div>
                </div>
                <div id="slide23" className="carousel-item relative w-full">
                  <img src="/firewatch-3.png" className="w-full" alt="" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <span href="#slide22" className="btn btn-circle" onClick={goTo} >❮</span> 
                    <span href="#slide21" className="btn btn-circle" onClick={goTo} >❯</span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title mb-2">
                  <div className="avatar mr-1">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="/firewatch-icon.jpg" alt="" className="" />
                    </div>
                  </div>
                  Firewatch
                </h2>
                <p className="mb-2">Firewatch est une IA qui détecte, en temps quasi réel, les principaux incendies à l'échelle mondiale afin d'alerter sur le réchauffement climatique. Utilisant les images des satellites Sentinel-2, elle s'appuie sur le modèle de détection d'objets YOLOv5, entraîné sur un dataset créé par nos soins. Les détections sont partagées sur Twitter pour une diffusion rapide, tandis qu'un tableau de bord permet d'avoir une vision globale.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-primary">#SatelliteImagery</div>
                  <div className="badge badge-outline badge-primary">#ComputerVision</div>
                  <div className="badge badge-outline badge-primary">#YOLOv5</div>
                  <div className="badge badge-outline badge-primary">#AWS</div>
                  <div className="badge badge-outline badge-primary">#Python</div>
                </div>
              </div>
            </a>

            <a href="https://apps.apple.com/fr/app/histoires-infinies/id6449842969" target="_blank" rel="noreferrer" className="card bg-base-100 shadow-xl hover:shadow-2xl">
              <figure>
                <img src="/histoires-infinies-mobile.png" alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title mb-2">
                  <div className="avatar mr-1">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="/histoires-infinies-icon.png" alt="" className="" />
                    </div>
                  </div>
                  Histoires Infinies
                </h2>
                <p className="mb-2">Histoires Infinies est une application mobile qui permet aux enfants de tous âges de créer des histoires en choisissant un personnage, un lieu et une aventure. L'histoire est générée grâce à GPT et narrée par un système de synthèse vocale. La combinaison de 20 personnages, 20 lieux et 10 types d'aventures donne lieu à des milliers de possibilités.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-primary">#Mobile</div>
                  <div className="badge badge-outline badge-primary">#GPT</div>
                  <div className="badge badge-outline badge-primary">#TextToSpeech</div>
                  <div className="badge badge-outline badge-primary">#Android</div>
                  <div className="badge badge-outline badge-primary">#iOS</div>
                  <div className="badge badge-outline badge-primary">#React</div>
                </div>
              </div>
            </a>

            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src="/stonkgpt.png" alt="" />
              </figure>
              <div className="card-body">
              <h2 className="card-title mb-2">
                  <div className="avatar mr-1">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="/stonkgpt-icon.png" alt="" className="" />
                    </div>
                  </div>
                  StonkGPT
                </h2>
                <p className="mb-2">StonkGPT est un logiciel qui offre des recommandations pour l'achat et la vente à découvert d'actions d'entreprises cotées à la bourse de Paris. S'appuyant sur un récent <a className="text-purple-600 link" target="_blank" rel="noreferrer" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4412788">article scientifique</a>, il exploite la capacité du modèle GPT à analyser les articles de presse afin d'en déduire l'impact probable sur le marché des actions.</p>
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

      <div className="mx-auto py-36 px-3 bg-gradient-to-r from-purple-900 to-purple-950">
        <h3 className="text-4xl text-center mb-8">Une idée ou un projet en tête ?</h3>
        <div class="text-center">
          <a className="btn btn-primary mx-8 mt-4" target="_blank" rel="noreferrer" href="https://meetings-eu1.hubspot.com/meetings/cercle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            Programmer un appel
          </a>

          <a className="btn btn-info btn-outline mx-8 mt-4" target="_blank" rel="noreferrer" href="mailto:hello@cercle.studio">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Nous contacter
          </a>
        </div>
      </div>

      <div className="bg-purple-950 py-6 pb-4 opacity-70 grid grid-cols-2">
        <div className="text-left pl-10">© {new Date().getFullYear()} cercle.studio</div>

        <div className="text-right pr-10">
          <a href="https://twitter.com/cercle_studio" target="_blank" rel="noreferrer" className="inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
