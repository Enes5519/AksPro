import React from "react";
import Link from "next/link";

const ProductList = ({ title, path, categories, children }) => (
  <div className="flex gap-8 items-start container py-8">
    {categories && categories.length > 0 && (
      <aside className="bg-red-500 flex flex-col">
        {categories.map(([categoryPath, name]) => {
          if (categoryPath !== "") {
            return (
              <Link key={categoryPath} href={`${path}${categoryPath}`}>
                <a className="whitespace-nowrap py-2.5 text-white px-5 border-b border-red-600 hover:bg-red-600">
                  {name}
                </a>
              </Link>
            );
          }

          return null;
        })}
      </aside>
    )}
    <main className="w-full">
      <h1 className="text-xl lg:text-4xl font-bold">{title}</h1>
      <hr className="my-4" />
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-y-4 gap-x-2 w-full">{children}</section>
    </main>
  </div>
);

export default ProductList;
