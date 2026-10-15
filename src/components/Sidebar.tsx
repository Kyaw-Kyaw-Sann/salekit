import React from "react";
import { LayoutDashboard, Package, ShoppingCart, History } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navigationItems = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "POS", to: "/pos", icon: ShoppingCart },
  { label: "Products", to: "/products", icon: ShoppingCart },
  { label: "Sales", to: "/sales", icon: History },
];

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 flex-col bg-sidebar p-5 text-white md:flex">
      <Link to="/" className="mb-8 flex items-center gap-3">
        <img src="/SaleKit.svg" alt="" className="h-11 w-11 rounded-xl" />
        <div>
          <p className="text-xl font-bold leading-tight"> Sale Kit</p>
          <p className="text-xs text-slate-300"> Mini POS </p>
        </div>
      </Link>

      <div className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              to={item.to}
              key={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
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

export default Sidebar;
