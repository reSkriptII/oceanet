import { useState } from "react";

import { Icon } from "./icon";
import { productsdata } from "./productdata";

const productCategories = ["featured", "storage", "database", "hosting", "analytics"] as const;

export function FilterableProductCards() {
  let [selection, setSelection] = useState<(typeof productCategories)[number]>("featured");

  return (
    <>
      <SelectorBar selection={selection} onChange={setSelection} />
      <CardsGrid productCategory={selection} />
    </>
  );
}

type selectionBarProps = {
  onChange: Function;
  selection: (typeof productCategories)[number];
};

function SelectorBar({ selection, onChange }: selectionBarProps) {
  const filterButtons = productCategories.map((value) => (
    <label key={value} className="selection-button relative">
      {value[0].toUpperCase() + value.slice(1)}
      <input
        type="radio"
        name="product-select"
        value={value}
        className="absolute inset-0 size-0"
        checked={value === selection}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  ));

  return <div className="my-4 flex flex-wrap gap-2 lg:my-8">{filterButtons}</div>;
}

type productCatProps = {
  productCategory: (typeof productCategories)[number];
};

function CardsGrid({ productCategory }: productCatProps) {
  // Note: change to fetch to backend later
  const cards = productsdata[productCategory].map((product, index) => (
    <ProductCard key={index} product={product} />
  ));

  return (
    <div className="h-108 w-full sm:max-lg:w-2/3 m-auto grid-cols-3 grid-rows-2 gap-4 lg:grid lg:h-128">
      <ProductHero productCategory={productCategory} />
      {cards}
    </div>
  );
}

function ProductHero({ productCategory }: productCatProps) {
  let heroData = productHeroData[productCategory];
  return (
    <section className="card row-span-2 size-full overflow-hidden bg-neutral-50">
      <div
        className="h-3/5 w-full bg-cover"
        style={{backgroundImage: `url(${heroData.backgoundImg})`}}
      ></div>
      <div className="flex flex-col h-2/5 justify-between px-8 py-4 lg:py-8">
        <h3 className="mb-4 text-center text-2xl">
          { heroData.title }
        </h3>
        <p className="sm:max-lg:px-8">{ heroData.description }</p>
        <a href={ heroData.link } className="block w-fit text-blue-500 hover:text-blue-800 hover:underline ml-auto">
          Read more ➤
        </a>
      </div>
    </section>
  );
}

type productPieceData_t = {
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  features: string[];
  link: string;
  icon: string;
};

function ProductCard({ product }: { product: productPieceData_t }) {
  function getTagColor(tag: string): string {
    if (["storage"].includes(tag)) return "bg-green-200";
    if (["database", "SQL", "noSQL", "GraphDB", "Redis"].includes(tag)) return "bg-blue-200";
    if (["hosting", "static-hosting"].includes(tag)) return "bg-yellow-200";
    if (["analytics", "traffic"].includes(tag)) return "bg-red-200";
    return "bg-slate-200";
  }

  const tagLi = product.tags.map((value) => {
    let tagColor = getTagColor(value);
    return (
      <li key={value} className={"rounded-full px-1.5 py-0.5 " + tagColor}>
        {" "}
        {value}{" "}
      </li>
    );
  });

  const featureLi = product.features.map((value) => <li key={value}>{value}</li>);

  return (
    <div className="relative hidden lg:block">
      <section className="card group size-full bg-neutral-50 p-4 pb-0 hover:absolute hover:z-10 hover:h-auto">
        <div className="relative h-[calc(100%-var(--spacing)*8)] overflow-hidden group-hover:overflow-y-visible">
          <Icon iconName={product.icon} className="size-16 fill-slate-400" />
          <h3 className="text-2xl font-semibold">{product.title}</h3>
          <ul className="flex flex-wrap gap-1">{tagLi}</ul>
          <p className="my-4 overflow-hidden leading-relaxed group-hover:overflow-y-visible">
            {product.description}
          </p>
          <p>Feature</p>
          <ul className="list-inside list-disc">{featureLi}</ul>
          <a href={product.link} className="text-blue-500 hover:text-blue-800 hover:underline">
            Read more ➤
          </a>
          <div className="absolute inset-0 bg-gradient-to-b from-80% to-white group-hover:hidden"></div>
        </div>
        <div className="text-center before:content-['⌄'] group-hover:before:content-['⌃']"></div>
      </section>
    </div>
  );
}

const productHeroData = {
  featured: {
    title: "Featured Product",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam nobis quisquam.", 
    backgoundImg: "/hero-bg.webp",
    link: "/coming-soon.html"
  },
  storage: {
    title: "",
    description: "",
    backgoundImg: "",
    link: ""
  },
  database: {
    title: "",
    description: "",
    backgoundImg: "",
    link: ""
  },
  hosting: {
    title: "",
    description: "",
    backgoundImg: "",
    link: ""
  },
  analytics: {
    title: "",
    description: "",
    backgoundImg: "",
    link: ""
  },
}
