import { Icon } from "./icon";
import { productsdata } from "./productdata";

const productCategories = ["featured", "storage", "database", "hosting", "analytics"] as const;

export function FilterableProductCards() {
  return (
    <>
      <SelectorBar />
      <CardsGrid productCategory="featured" />
    </>
  )
}

function SelectorBar() {
  
  const filterButtons = productCategories.map((value, index) => (
      <label className="selection-button relative">
        {value}
        <input
          type="radio"
          name="product-select"
          value={ value.toLowerCase() }
          className="absolute inset-0 size-0"
          checked={ index == 0 } 
        />
      </label>
    )
  )

  return (
    <div className="my-4 flex flex-wrap gap-2 lg:my-8">
      {filterButtons}
    </div>
  )
}

type cardsGridProps = {
  productCategory: typeof productCategories[number];
}

function CardsGrid({ productCategory }: cardsGridProps) {

  // Note: change to fetch to backend later
  const cards = productsdata[productCategory].map((product) => <ProductCard product={product} />)

  return (
    <div className="h-64 w-full grid-cols-3 grid-rows-2 gap-4 lg:grid lg:h-128">
      <section className="card row-span-2 size-full">
      
      </section>
      {cards}
    </div>
  )
}

type productPieceData_t = {
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  features: string[];
  link: string;
  icon: string;
}

function ProductCard({ product }: { product: productPieceData_t }) {

  return (
    <div className="relative hidden lg:block">
      <section className="card group size-full bg-neutral-50 p-4 pb-0 hover:absolute hover:h-auto">
        <div className="relative h-[calc(100%-var(--spacing)*8)] overflow-hidden group-hover:overflow-y-visible">
          <Icon iconName={ product.icon } className="size-16 fill-slate-400" />
          <h3 className="text-2xl font-semibold"> 
            { product.title } 
          </h3>
          <p className="my-4 overflow-hidden leading-relaxed group-hover:overflow-y-visible">
            { product.description }
          </p>
          <div className="absolute inset-0 bg-gradient-to-b from-80% to-white group-hover:hidden"></div>
        </div>
        <div className="text-center before:content-['⌄'] group-hover:before:content-['⌃']"></div>
      </section>
    </div>
  )
}

