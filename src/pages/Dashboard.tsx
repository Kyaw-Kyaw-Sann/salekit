import type { Product, Sale } from "../types";
import StatCard from "../components/StatCard";
import {
  CircleDollarSign,
  Package,
  Receipt,
  TriangleAlert,
} from "lucide-react";

type DashboardProps = {
  products: Product[];
  sales: Sale[];
};

function Dashboard({ products, sales }: DashboardProps) {
  const totalRevenue = sales.reduce((total, sale) => total + sale.total, 0);

  const lowCount = products.filter((product) => product.stock < 5).length;

  const recentSales = sales.slice(0, 3);

  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold text-heading">Dashboard</h1>
        <p className="mt-1 text-sm text-body">
          Overview of your products and sales.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Products" value={products.length}>
          <Package size={24} />
        </StatCard>

        <StatCard title="Completed Sales" value={sales.length}>
          <Receipt size={24} />
        </StatCard>

        <StatCard
          title="Total Revenue"
          value={`$${totalRevenue.toFixed(2)}`}
        >
          <CircleDollarSign size={24} />
        </StatCard>

        <StatCard title="Low Stock" value={lowCount}>
          <TriangleAlert size={24} />
        </StatCard>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-heading">Recent Sales</h2>

        {recentSales.length === 0 ? (
          <p className="mt-4 text-sm text-body">
            No sales have been completed yet.
          </p>
        ) : (
          <div className="mt-4 divide-y divide-border">
            {recentSales.map((sale) => (
              <div
                key={sale.id}
                className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-heading">
                    Sale #{sale.id}
                  </p>
                  <p className="mt-1 text-sm text-body">
                    {new Date(sale.date).toLocaleDateString()}
                    {" · "}
                    {sale.items.length} items
                  </p>
                </div>

                <p className="font-semibold text-heading">
                  ${sale.total.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
