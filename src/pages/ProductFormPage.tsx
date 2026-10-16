import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Product, ProductFormData } from "../types";
import { Link, useNavigate, useParams } from "react-router-dom";

type ProductFormPageProps = {
  products: Product[],
  onAddProduct: (productData: ProductFormData ) => void;
  onUpdateProduct: (productId: string, productData: ProductFormData) => void
}

function ProductFormPage({products ,onAddProduct, onUpdateProduct}: ProductFormPageProps) {

  const navigate = useNavigate()
  const {productId} = useParams();

  const productToEdit=products.find((product)=>product.id===productId)

  const [name, setName] = useState(productToEdit?.name??"");
  const [nameError, setNameError] = useState("");

  const [price, setPrice] = useState(productToEdit?.price.toString()??"");
  const [priceError, setPriceError] = useState("");

  const [category, setCategory] = useState(productToEdit?.category??"");
  const [categoryError, setCategoryError] = useState("");

  const [stock, setStock] = useState(productToEdit?.stock.toString()??"");
  const [stockError, setStockError] = useState("");


  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handlePriceChange(event: ChangeEvent<HTMLInputElement>) {
    setPrice(event.target.value);
  }

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    setCategory(event.target.value);
  }

  function handleStockChange(event: ChangeEvent<HTMLInputElement>) {
    setStock(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setNameError("");
    setPriceError("");
    setCategoryError("");
    setStockError("");

    if (name.trim() === "") {
      setNameError("Please enter name");
      return;
    }

    const numericPrice = Number(price);

    if (
      price.trim() === "" ||
      Number.isNaN(numericPrice) ||
      numericPrice <= 0
    ) {
      setPriceError("Please enter value price");
      return;
    }

    if (category.trim() === "") {
      setCategoryError("Please choose a category");
      return;
    }

    const numericStock = Number(stock);

    if (stock.trim() === "" || Number.isNaN(numericStock) 
      || numericStock < 0 || !Number.isInteger(numericStock)) {
      setStockError("Please enter a value stock");
      return;
    }

    // create a form data obj with type
    const productData : ProductFormData={
        name: name.trim(),
        price: numericPrice,
        category: category,
        stock: numericStock
    }

  //  onAddProduct(productData)

   if(productToEdit){
    onUpdateProduct(productToEdit.id, productData)  // here, i got error
   } else{
    onAddProduct(productData)
   }

   // need to insert this at the end of submit work
   navigate("/products")

  }

  if(productId && !productToEdit){ // this should be note
    return(
      <div className="mx-auto max-w-lg rounded-xl border border-border bg-surface p-6 text-center shadow-sm">
       <p className="mb-4 text-xl font-semibold text-heading">Not Found Page</p>
       <Link to="/products" className="inline-flex rounded-lg bg-primary px-4 py-2 font-medium text-on-primary transition-colors hover:bg-primary-hover">
       <p className="">Back to products</p>
       </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h3 className="mb-6 text-2xl font-bold text-heading sm:text-3xl">
        {productToEdit?`Edit ${productToEdit.name}`:'Add product'}
      </h3>

      <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6">
        <label htmlFor="name" className="block text-sm font-semibold text-heading">Add Name</label>
        <input className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-heading outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" type="text" id="name" value={name} onChange={handleNameChange} />

        {nameError && <p className="text-sm font-medium text-danger">{nameError}</p>}

        <label htmlFor="price" className="block text-sm font-semibold text-heading">Add Price</label>
        <input
          className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-heading outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          type="number"
          id="price"
          value={price}
          onChange={handlePriceChange}
          min="0"
          step="0.01"
        />

        {priceError && <p className="text-sm font-medium text-danger">{priceError}</p>}

        <label htmlFor="category" className="block text-sm font-semibold text-heading">Add Category</label>
        <select className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-heading outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" id="category" value={category} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Drinks">Drinks</option>
          <option value="Desserts">Desserts</option>
          <option value="Snacks">Snacks</option>
        </select>

        {categoryError && <p className="text-sm font-medium text-danger">{categoryError}</p>}

        <label htmlFor="stock" className="block text-sm font-semibold text-heading">
          Add Stock
        </label>
        <input
          type="number"
          id="stock"
          className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-heading outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          value={stock}
          onChange={handleStockChange}
          min="0"
          step="1"
        />

        {stockError && <p className="text-sm font-medium text-danger">{stockError}</p>}

        <button className="w-full rounded-lg bg-primary px-4 py-2.5 font-semibold text-on-primary transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="submit">{productToEdit?"Update":"Add"}</button>
      </form>

      <p className="mt-5 text-sm text-muted"> Preview name: {name}</p>
      <p className="text-sm text-muted"> Preview price: {price}</p>
      <p className="text-sm text-muted"> Preview category: {category}</p>
      <p className="text-sm text-muted"> Preview stock: {stock}</p>
    </div>
  );
}

export default ProductFormPage;
