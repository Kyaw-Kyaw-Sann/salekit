import { Link, useParams } from 'react-router-dom'
import type { Product } from '../types'

type ProductDetailsProps={
  products: Product[]
}

function ProductDetails({products}:ProductDetailsProps) {

  const {productId}=useParams()

  const product = products.find((product)=>product.id===productId)

  if(!product){
    return(
      <>
      <h2 className="rounded-xl border border-border bg-surface p-6 text-center text-xl font-semibold text-danger shadow-sm">This product does not exist</h2>
      </>
    )
  }

  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-7">
      <p className="mb-5 text-2xl font-bold text-heading sm:text-3xl">{product.name}</p>
      <p className="mb-3 w-fit rounded-full bg-background px-3 py-1 text-sm font-medium text-body">Category: {product.category}</p>
       <p className="mb-3 text-lg font-semibold text-primary">Price: {product.price}</p>
        <p className="mb-6 text-sm font-medium text-body">Stock: {product.stock}</p>
        <Link to={`/products/${productId}/edit`} className="inline-flex rounded-lg bg-primary px-4 py-2.5 font-medium text-on-primary transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <p className="">Edit</p>
        </Link>
    </div>
  )
}

export default ProductDetails
