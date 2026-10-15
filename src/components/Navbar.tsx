import React from "react";
import { LayoutDashboard, Package, ShoppingCart, History } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navigationItems = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "POS", to: "/pos", icon: ShoppingCart },
  { label: "Products", to: "/products", icon: ShoppingCart },
  { label: "Sales", to: "/sales", icon: History },
];

function Navbar() {
  return (
    <aside className="bg-sidebar text-white md:hidden">
      <Link to="/" className="flex w-fit items-center gap-3 px-4 py-3">
        <img src="/SaleKit.svg" alt="" className="h-10 w-10 rounded-xl" />
        <div>
          <p className="font-bold leading-tight"> Sale Kit</p>
          <p className="text-xs text-slate-300"> Mini POS </p>
        </div>
      </Link>

      <div className="flex overflow-x-auto border-t border-slate-700 px-2 py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              to={item.to}
              key={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex min-w-20 flex-1 flex-col items-center gap-1 rounded-md px-2 py-2 text-xs transition-colors ${
                  isActive
                    ? "bg-primary text-on-primary"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span> {item.label} </span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}

export default Navbar;
