import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import POS from "./pages/POS";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ProductFormPage from "./pages/ProductFormPage";
import SalesHistory from "./pages/SalesHistory";
import NotFound from "./pages/NotFound";
import { initialProducts } from "./data/initialProducts";
import { useState } from "react";
import type { Product, ProductFormData } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  function handleAddProduct(productData: ProductFormData) {
    // form data don't include id
    const newProduct: Product = {
      id: crypto.randomUUID(),
      ...productData,
    };

    setProducts((currentProducts) => [...currentProducts, newProduct]);

    console.log(productData);
  }

  function handleUpdateProduct(
    productId: string,
    productData: ProductFormData,
  ) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId ? { ...product, ...productData } : product,
      ),
    );
  }

  function handleDeleteProduct(productId: string) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId),
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="pos" element={<POS />} />
        <Route
          path="products"
          element={
            <Products
              products={products}
              onDeleteProduct={handleDeleteProduct}
            />
          }
        />
        <Route
          path="products/:productId"
          element={<ProductDetails products={products} />}
        />
        <Route
          path="products/new"
          element={
            <ProductFormPage
              products={products}
              onAddProduct={handleAddProduct}
              onUpdateProduct={handleUpdateProduct}
            />
          }
        />
        <Route
          path="products/:productId/edit"
          element={
            <ProductFormPage
              products={products}
              onAddProduct={handleAddProduct}
              onUpdateProduct={handleUpdateProduct}
            />
          }
        />
        <Route path="sales" element={<SalesHistory />} />
        <Route path="sales/:saleId" element={<SalesHistory />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
