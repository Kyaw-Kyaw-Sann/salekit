import type { Product } from '../types'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

type ProductsProps={
  products: Product[],
  onDeleteProduct: ( productId: string) => void
}

function Products({products, onDeleteProduct}:ProductsProps) {
  
  function handleDelete(product:Product){
    // console.log("Deleted product", product)

  const realDelete = window.confirm(
    `Delete "${product.name}"`
  )

  if(!realDelete){
    return
  }

    onDeleteProduct(product.id)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-heading sm:text-3xl">Products</h1>
      <Link
        to="/products/new"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-on-primary transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
      <Plus size={20} className="shrink-0"/>
        Add a new product
      </Link>
      <p className="text-sm font-medium text-body">Total products: {products.length}</p>
      <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product)=>(
          <li key={product.id} className="min-w-0">
            <ProductCard product={product} onDelete={handleDelete}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
