import type { Product } from '../types'
import { Link } from 'react-router-dom'

type ProductCardProps = {
    product: Product
    onDelete: (product: Product) => void
}

function ProductCard({product, onDelete}: ProductCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md">
       <h2 className="mb-3 text-lg font-semibold text-heading">{product.name}</h2>
       <p className="mb-2 text-xl font-bold text-primary">Price: $ {product.price}</p>
       <p className="mb-2 w-fit rounded-full bg-background px-3 py-1 text-xs font-medium text-body">Category: {product.category}</p>
       <p className="mb-5 text-sm font-medium text-body">Stock: {product.stock}</p>

        <Link
          to={`/products/${product.id}`}
          className="mb-2 inline-flex w-full items-center justify-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-heading transition-colors hover:bg-background"
        >
        <p className="">Details</p>
        </Link>

        <Link
          to={`/products/${product.id}/edit`}
          className="mb-2 inline-flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-primary-hover"
        >
        <p className="">Edit</p>
        </Link>
       <button className="w-full rounded-lg border border-danger px-3 py-2 text-sm font-medium text-danger transition-colors hover:bg-danger hover:text-white focus:outline-none focus:ring-2 focus:ring-danger focus:ring-offset-2" type='button' onClick={()=>onDelete(product)}>Delete</button>
    </div>
  )
}

export default ProductCard
