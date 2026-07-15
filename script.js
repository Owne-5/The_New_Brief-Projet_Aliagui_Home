// GESTION DU MENU HAMBURGER DEROULANT
window.addEventListener("click", (e) => {
  if (e.target.closest("li")?.id === "open-menu") {
    const width = screen.width / 3;

    if (screen.width < 1024) {
      setTimeout(() => {
        document.getElementById("nav-menu").style.width = "100%";
        document.getElementById("nav-menu-close").style.width = "100%";
        document.querySelector("header").style.height = "0px";
      }, 1);
    } else {
      setTimeout(() => {
        document.getElementById("search-menu").style.height = "0px";
        document.getElementById("search-input").value = "";
        document.getElementById("nav-menu").style.width = `${width}px`;
        document.getElementById("nav-menu-close").style.width = `${width}px`;
        document.querySelector("header").style.height = "0px";
      }, 1);
    }
  }
  if (e.target.id === "close") {
    setTimeout(() => {
      document.getElementById("nav-menu").style.width = "0%";
    }, 1);

    setTimeout(() => {
      document.querySelector("header").style.height = "96px";
    }, 999);
  }

  if (e.target.id === "search-btn") {
    document.getElementById("search-menu").removeAttribute("style");
    document.querySelector("header").classList.remove("text-white");
    document.querySelector("header").classList.add("text-black");
    document.getElementById("search-menu").classList.toggle("h-64");
    document.getElementById("search-input").value = "";
  }

  if (e.target.id === "submit") {
    e.preventDefault();
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("message").value = "";
  }
});

// GESTION DE L'AFFICHAGE DES PRODUITS POUR LA PAGE COLLECTION
const categories = {
  draperie: {
    title: "Draperie d'Intérieur",
    sections: [
      {
        name: "Collection Antique",
        status: "available",
        products: [
          {
            image: "asset/photo/image/lit_marron_antique.avif",
            title: "Drap Terre Antique",
            price: "45 000 FCFA",
            description:
              "Texture douce et finitions haut de gamme, inspirée des teintes subtiles d'argile africaine.",
          },
          {
            image: "asset/photo/image/lit_cercle_antique.avif",
            title: "Housse Antique Ocre",
            price: "45 000 FCFA",
            description:
              "Un raffinement intemporel mariant modernité et authenticité pour vos nuits.",
          },
          {
            image: "asset/photo/image/lit_belge_adingra.avif",
            title: "Parure Sable Fin",
            price: "45 000 FCFA",
            description: "Élégance épurée en coton premium tissé délicatement.",
          },
          {
            image: "asset/photo/image/lit_rouge_antique.avif",
            title: "Drap Prestige d'Afrique",
            price: "45 000 FCFA",
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
            image: "asset/photo/image/lit_rose_flora.avif",
            title: "Drap Flora Roseaux",
            price: "45 000 FCFA",
            description:
              "Motifs végétaux subtils évoquant la quiétude de la flore tropicale.",
          },
          {
            image: "asset/photo/image/lit_vert_flora.avif",
            title: "Parure Fleur de Coton",
            price: "45 000 FCFA",
            description:
              "Une douceur absolue mariée à un style épuré et lumineux.",
          },
          {
            image: "asset/photo/image/lit_blanc_t_ivoire.avif",
            title: "Drap Liane Sacrée",
            price: "45 000 FCFA",
            description:
              "Un hommage d'une finesse rare à la nature majestueuse.",
          },
          {
            image: "asset/photo/image/lit_bleu_antique.avif",
            title: "Housse Écorce & Feuilles",
            price: "45 000 FCFA",
            description:
              "Nuances neutres et textures naturelles pour un équilibre visuel parfait.",
          },
        ],
      },
      {
        name: "Collection Terre d'Ivoire",
        status: "available",
        products: [
          {
            image: "asset/photo/image/macro_s3.avif",
            title: "Parure Ivoire Épurée",
            price: "50 000 FCFA",
            description:
              "Savoir-faire unique mettant en valeur l'éclat et la pureté des lignes ivoiriennes.",
          },
        ],
      },
      {
        name: "Collection Adingra",
        status: "available",
        products: [
          {
            image: "asset/photo/image/lit_belge_adingra.avif",
            title: "Drap Symboles Adingra",
            price: "55 000 FCFA",
            description:
              "Subtile intégration de symboles chargés d'histoire pour un intérieur protecteur et élégant.",
          },
        ],
      },
      {
        name: "Collection Traditionnelle",
        status: "sold_out",
        products: [
          {
            image: "asset/photo/image/lit_cercle_antique.avif",
            title: "Drap Bogolan Luxe",
            price: "45 000 FCFA",
            description:
              "Un linge de lit d'exception fidèle aux codes graphiques du bogolan.",
          },
          {
            image: "asset/photo/image/macro_s2.avif",
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
            image: "asset/photo/image/service_noir_antique.avif",
            title: "Nappe Lin Terracota",
            price: "25 000 FCFA",
            description:
              "Apportez une atmosphère chaleureuse et profondément accueillante à vos tablées.",
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
            image: "asset/photo/image/deco_interieur.avif",
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
  document.getElementById("new-collection").classList.remove("flex");
  document.getElementById("new-collection").classList.add("hidden");

  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("product-page").classList.add("hidden");
  document.getElementById("collection-page").classList.remove("hidden");

  const categoryData = categories[categoryKey];
  document.getElementById("collection-main-title").innerText =
    categoryData.title;

  const sectionsContainer = document.getElementById(
    "collection-sections-container",
  );
  sectionsContainer.innerHTML = "";

  categoryData.sections.forEach((section, sectionIdx) => {
    const sectionElement = document.createElement("div");
    sectionElement.classList.add("flex", "flex-col", "gap-6");

    const isSoldOut = section.status === "sold_out";
    const badgeMarkup = isSoldOut
      ? `<span class="text-[0.7rem] font-sans tracking-widest text-[#c55d3a] border border-[#c55d3a]/40 px-3 py-1 rounded-none uppercase font-medium">Rupture de stock</span>`
      : "";

    sectionElement.innerHTML = `
      <div class="flex items-center gap-4 flex-wrap">
        <h3 class="font-serif text-2xl tracking-wide title-h1">${section.name}</h3>
        ${badgeMarkup}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"></div>
    `;

    const grid = sectionElement.querySelector(".grid");

    section.products.forEach((product, productIdx) => {
      const productCard = document.createElement("div");
      productCard.className = `group cursor-pointer ${isSoldOut ? "opacity-60" : ""}`;

      productCard.innerHTML = `
        <div class="relative overflow-hidden bg-light aspect-[3/4] mb-3">
          <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
          <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <span class="text-white text-xs tracking-[0.25em] uppercase font-light">Voir le produit</span>
          </div>
        </div>
        <div class="flex flex-col gap-1 text-sm">
          <h4 class="font-serif text-lg tracking-wide group-hover:text-[#c55d3a] transition-colors text-gray-900">${product.title}</h4>
          <span class="text-[#c55d3a] font-medium">${product.price}</span>
        </div>
      `;

      productCard.onclick = () =>
        showProduct(categoryKey, sectionIdx, productIdx);
      grid.appendChild(productCard);
    });

    sectionsContainer.appendChild(sectionElement);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showProduct(categoryKey, sectionIdx, productIdx) {
  const product =
    categories[categoryKey].sections[sectionIdx].products[productIdx];
  const isSectionSoldOut =
    categories[categoryKey].sections[sectionIdx].status === "sold_out";

  document.getElementById("collection-page").classList.add("hidden");
  document.getElementById("product-page").classList.remove("hidden");

  document.getElementById("product-back-btn").onclick = () =>
    showCollection(categoryKey);

  const contentContainer = document.getElementById("product-content");

  const ctaMarkup = isSectionSoldOut
    ? `<div class="text-center text-xs tracking-widest uppercase border border-gray-200 text-gray-400 py-4 px-8 rounded-none cursor-not-allowed">
         Actuellement indisponible
       </div>`
    : `<a 
        href="https://wa.me/2250142789097?text=Je%20voudrais%20plus%20de%20détail%20sur%20le%20produit%20:%20${encodeURIComponent(product.title)}"
        target="_blank"
        class="inline-block text-center text-xs uppercase tracking-[0.2em] bg-[#c55d3a] text-white py-4 px-8 rounded-none border border-[#c55d3a] hover:bg-white hover:text-[#1a1a1a] transition-all duration-400 font-medium"
       >
        Commander sur WhatsApp
       </a>`;
  contentContainer.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
      <div class="md:col-span-7 bg-light aspect-[4/5] md:h-[650px] overflow-hidden">
        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover" loading="lazy">
      </div>
      
      <div class="md:col-span-5 flex flex-col justify-center">
        <h2 class="font-serif text-3xl md:text-4xl tracking-wide text-gray-900 mb-4 font-light title-h1">${product.title}</h2>
        <span class="text-xl text-[#c55d3a] font-medium mb-6 block">${product.price}</span>
        
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
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMain() {
  document.getElementById("new-collection").classList.remove("hidden");
  document.getElementById("new-collection").classList.add("flex");
  document.getElementById("main-view").classList.remove("hidden");
  document.getElementById("collection-page").classList.add("hidden");
  document.getElementById("product-page").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("keypress", (e) => {
  const searchBox = [
    "accueil",
    "collection",
    "histoire",
    "draperie",
    "service de table",
    "decoration interieur",
  ];
  const searchInput = document.getElementById("search-input");
  if (e.target.id === "search-input") {
    if (searchInput.value.trim() !== "" && e.key === "Enter") {
      let table = searchBox.filter((val) =>
        val.includes(searchInput.value.trim().toLowerCase()),
      );

      switch (table[0]) {
        case "accueil":
          window.location.href = "index.html";
          break;
        case "collection":
          window.location.href = "collection.html";
          break;
        case "histoire":
          window.location.href = "histoire.html";
          break;
        case "draperie":
          window.location.href = "collection.html#draperie";
          break;
        case "service de table":
          window.location.href = "collection.html#table";
          break;
        case "decoration interieur":
          window.location.href = "collection.html#deco";
          break;
        default:
          document.getElementById("msg").classList.toggle("hidden");
          document.getElementById("msg").innerText =
            `${searchInput.value.trim()} est introuvable sur le site`;
          setTimeout(() => {
            document.getElementById("msg").classList.toggle("hidden");
          }, 3000);
          break;
      }
    }
  }
});
