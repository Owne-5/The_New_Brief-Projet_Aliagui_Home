function openMenu() {
  document.getElementById("nav-menu").classList.remove("hidden");
  document.getElementById("nav-menu").classList.add("flex");
  document.getElementById("nav-menu").classList.add(`w-[${screen.width / 3}]`);
  document.getElementById("nav-bar").classList.add("hidden");
  if (screen.width >= 1024) {
    document
      .querySelectorAll("section")
      .forEach((e) => e.classList.add("blur-[1px]"));

    document.querySelector("footer").classList.add("blur-[1px]");
  }
}

function closeMenu() {
  document.getElementById("nav-menu").classList.add("hidden");
  document.getElementById("nav-menu").classList.remove("flex");
  document.getElementById("nav-bar").classList.remove("hidden");

  document
    .querySelectorAll("section")
    .forEach((e) => e.classList.remove("blur-[1px]"));
  document.querySelector("footer").classList.remove("blur-[1px]");
}

let lastScrollTop = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll < 0) currentScroll = 0;

  const hauteurSection1 = window.innerHeight - 96;

  if (currentScroll > hauteurSection1) {
    header.classList.remove("bg-transparent", "text-white");
    header.classList.add("bg-white", "text-black", "shadow-md");
  } else {
    header.classList.remove("bg-white", "text-black", "shadow-md");
    header.classList.add("bg-transparent", "text-white");
  }

  if (currentScroll > lastScrollTop && currentScroll > window.innerHeight) {
    header.classList.add("-translate-y-full");
  } else {
    header.classList.remove("-translate-y-full");
  }

  lastScrollTop = currentScroll;
});

window.addEventListener("click", (e) => {
  const hasGoodId = String(e.target.id).includes("collec-atlantique");
  if (hasGoodId) {
    document.getElementById("section-container").classList.add("hidden");
    document.getElementById("product-section").classList.add("flex");
    document.getElementById("product-section").classList.remove("hidden");
  }
});

const categories = {
  draperie: {
    title: "Draperie d'Intérieur",
    sections: [
      {
        name: "Collection Antique",
        status: "available",
        products: [
          {
            image: "../asset/photo/image/macro_s1.jpeg",
            title: "Drap Terre Antique",
            price: "38 000 FCFA",
            description:
              "Texture douce et finitions haut de gamme, inspirée des teintes subtiles d'argile africaine.",
          },
          {
            image: "../asset/photo/image/macro_s2.jpeg",
            title: "Housse Antique Ocre",
            price: "42 000 FCFA",
            description:
              "Un raffinement intemporel mariant modernité et authenticité pour vos nuits.",
          },
          {
            image: "../asset/photo/image/macro_s3.jpg",
            title: "Parure Sable Fin",
            price: "45 000 FCFA",
            description: "Élégance épurée en coton premium tissé délicatement.",
          },
          {
            image: "../asset/photo/image/macro_s4.jpeg",
            title: "Drap Prestige d'Afrique",
            price: "48 000 FCFA",
            description:
              "Des motifs minimalistes et géométriques pour une chambre contemporaine.",
          },
        ],
      },
      {
        name: "Collection Flora",
        status: "available",
        products: [
          {
            image: "../asset/photo/image/macro_s1.jpeg",
            title: "Drap Flora Roseaux",
            price: "40 000 FCFA",
            description:
              "Motifs végétaux subtils évoquant la quiétude de la flore tropicale.",
          },
          {
            image: "../asset/photo/image/macro_s2.jpeg",
            title: "Parure Fleur de Coton",
            price: "39 000 FCFA",
            description:
              "Une douceur absolue mariée à un style épuré et lumineux.",
          },
          {
            image: "../asset/photo/image/macro_s3.jpg",
            title: "Drap Liane Sacrée",
            price: "43 000 FCFA",
            description:
              "Un hommage d'une finesse rare à la nature majestueuse.",
          },
          {
            image: "../asset/photo/image/macro_s4.jpeg",
            title: "Housse Écorce & Feuilles",
            price: "41 000 FCFA",
            description:
              "Nuances neutres et textures naturelles pour un équilibre visuel parfait.",
          },
        ],
      },
      {
        name: "Collection Traditionnelle",
        status: "sold_out", // Gère la rupture de stock demandée
        products: [
          {
            image: "../asset/photo/image/macro_s2.jpeg",
            title: "Drap Bogolan Luxe",
            price: "45 000 FCFA",
            description:
              "Un linge de lit d'exception fidèle aux codes graphiques du bogolan.",
          },
          {
            image: "../asset/photo/image/macro_s4.jpeg",
            title: "Drap Héritage Royal",
            price: "52 000 FCFA",
            description:
              "Finitions haute couture célébrant le savoir-faire artisanal traditionnel.",
          },
        ],
      },
    ],
  },
  table: {
    title: "Service de Table",
    sections: [
      {
        name: "Linge de Table Épuré",
        status: "available",
        products: [
          {
            image: "../asset/photo/image/service_de_table.jpeg",
            title: "Nappe Lin Terracota",
            price: "25 000 FCFA",
            description:
              "Apportez une atmosphère chaleureuse et profondément chaleureuse à vos tablées.",
          },
        ],
      },
    ],
  },
  deco: {
    title: "Décoration Intérieure",
    sections: [
      {
        name: "Objets & Accessoires",
        status: "available",
        products: [
          {
            image: "../asset/photo/image/deco_interieur.jpeg",
            title: "Vase Signature",
            price: "18 000 FCFA",
            description:
              "Pièce artisanale aux lignes géométriques, pensée pour l'Afrique moderne.",
          },
        ],
      },
    ],
  },
};

let currentCategoryGlobal = "";

function showCollection(categoryKey) {
  currentCategoryGlobal = categoryKey;

  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("product-page").classList.add("hidden");
  document.getElementById("new-collection").classList.add("hidden");
  document.getElementById("collection-page").classList.remove("hidden");

  const categoryData = categories[categoryKey];
  document.getElementById("collection-main-title").innerText =
    categoryData.title;

  const sectionsContainer = document.getElementById(
    "collection-sections-container",
  );
  sectionsContainer.innerHTML = "";

  categoryData.sections.forEach((section, sectionIdx) => {
    // Création du bloc de la sous-collection
    const sectionElement = document.createElement("div");
    sectionElement.classList.add("flex", "flex-col", "gap-6");

    // En-tête de section avec badge rupture si applicable
    const isSoldOut = section.status === "sold_out";
    const badgeMarkup = isSoldOut
      ? `<span class="text-[0.7rem] font-sans tracking-widest text-[#c2593f] border border-[#c2593f]/40 px-3 py-1 rounded-full uppercase font-medium">Rupture de stock</span>`
      : "";

    sectionElement.innerHTML = `
      <div class="flex items-center gap-4 flex-wrap">
        <h3 class="font-serif text-2xl tracking-wide">${section.name}</h3>
        ${badgeMarkup}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Les produits vont s'injecter ici -->
      </div>
    `;

    const grid = sectionElement.querySelector(".grid");

    section.products.forEach((product, productIdx) => {
      const productCard = document.createElement("div");
      // Si la section entière est en rupture, on applique une légère opacité générale
      productCard.className = `group cursor-pointer ${isSoldOut ? "opacity-70" : ""}`;

      productCard.innerHTML = `
        <div class="relative overflow-hidden bg-light aspect-[3/4] mb-3">
          <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
          <!-- Effet Hover "Voir le produit" -->
          <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <span class="text-white text-xs tracking-[0.25em] uppercase font-light">Voir le produit</span>
          </div>
        </div>
        <div class="flex flex-col gap-1 text-sm">
          <h4 class="font-serif text-lg tracking-wide group-hover:text-[#c2593f] transition-colors text-gray-900">${product.title}</h4>
          <span class="text-[#c2593f] font-medium">${product.price}</span>
        </div>
      `;

      productCard.onclick = () =>
        showProduct(categoryKey, sectionIdx, productIdx);
      grid.appendChild(productCard);
    });

    sectionsContainer.appendChild(sectionElement);
  });
}

function showProduct(categoryKey, sectionIdx, productIdx) {
  const product =
    categories[categoryKey].sections[sectionIdx].products[productIdx];
  const isSectionSoldOut =
    categories[categoryKey].sections[sectionIdx].status === "sold_out";

  document.getElementById("collection-page").classList.add("hidden");
  document.getElementById("product-page").classList.remove("hidden");

  // Configuration dynamique du bouton retour de la fiche produit vers sa catégorie d'origine
  document.getElementById("product-back-btn").onclick = () =>
    showCollection(categoryKey);

  // Rendu de la fiche produit
  const contentContainer = document.getElementById("product-content");

  // Modification de l'état du CTA si rupture de stock
  const ctaMarkup = isSectionSoldOut
    ? `<div class="text-center text-xs tracking-widest uppercase border border-gray-200 text-gray-400 py-4 px-8 cursor-not-allowed">
         Actuellement indisponible
       </div>`
    : `<a 
        href="https://wa.me/2250700000000?text=Bonjour%20Aliagui%20Home,%20je%20souhaite%20commander%20le%20produit%20:%20${encodeURIComponent(product.title)}"
        target="_blank"
        class="inline-block text-center text-xs uppercase tracking-[0.2em] bg-black text-white py-4 px-8 border border-black hover:bg-white hover:text-black transition-all duration-400 font-medium"
       >
        Commander sur WhatsApp
       </a>`;

  contentContainer.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
      <div class="md:col-span-7 bg-light aspect-[4/5] md:h-[650px] overflow-hidden">
        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
      </div>
      
      <div class="md:col-span-5 flex flex-col justify-center">
        <h2 class="font-serif text-3xl md:text-4xl tracking-wide text-gray-900 mb-4 font-light">${product.title}</h2>
        <span class="text-xl text-[#c2593f] font-medium mb-6 block">${product.price}</span>
        
        <hr class="border-gray-100 mb-6" />
        
        <p class="text-gray-500 text-sm leading-relaxed mb-8 font-light">
          ${product.description}
        </p>
        
        <div class="flex flex-col">
          ${ctaMarkup}
        </div>
      </div>
    </div>  
  `;
}

function showMain() {
  document.getElementById("new-collection").classList.remove("hidden");
  document.getElementById("main-view").classList.remove("hidden");
  document.getElementById("collection-page").classList.add("hidden");
  document.getElementById("product-page").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
