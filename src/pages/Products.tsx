import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const productFamilies = [
    { name: "Studs", count: 124, img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop" },
    { name: "Nutplates", count: 86, img: "https://images.unsplash.com/photo-1580983546130-348218726632?q=80&w=400&auto=format&fit=crop" },
    { name: "Standoffs & Spacers", count: 52, img: "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?q=80&w=400&auto=format&fit=crop" },
    { name: "Cable Tie Mounts", count: 43, img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=400&auto=format&fit=crop" },
    { name: "Hooks & Hangers", count: 28, img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format&fit=crop" },
    { name: "Insulation Blanket Fasteners", count: 35, img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop" },
    { name: "Panel Fasteners", count: 61, img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop" },
    { name: "Adhesives", count: 18, img: "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?q=80&w=400&auto=format&fit=crop" },
    { name: "Installation Tooling", count: 45, img: "https://images.unsplash.com/photo-1580983546130-348218726632?q=80&w=400&auto=format&fit=crop" },
  ];

  const filters = [
    { name: "Product Family", options: ["Studs", "Nutplates", "Mounts", "Adhesives"] },
    { name: "Application", options: ["Composite Structure", "Cable Management", "Equipment Mounting", "Panel Attachment"] },
    { name: "Base Material", options: ["Carbon Fiber", "Aluminum", "Titanium", "Steel", "Fiberglass"] },
    { name: "Industry", options: ["Aerospace", "Defense", "Marine", "Rail", "Industrial"] },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Product Catalog</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Browse our comprehensive range of adhesive-bonded fastening systems. Filter by application, material, or industry to find the exact solution for your engineering challenge.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-slate-900 flex items-center">
                <Filter className="w-4 h-4 mr-2" /> Filters
              </h2>
              <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">Clear All</button>
            </div>

            <div className="space-y-6">
              {filters.map((filter) => (
                <div key={filter.name} className="border-b border-slate-100 pb-4 last:border-0">
                  <button 
                    className="flex justify-between items-center w-full text-left font-semibold text-sm text-slate-800 mb-3"
                    onClick={() => setActiveFilter(activeFilter === filter.name ? null : filter.name)}
                  >
                    {filter.name}
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFilter === filter.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {(activeFilter === filter.name || activeFilter === null) && (
                    <div className="space-y-2">
                      {filter.options.map((option) => (
                        <label key={option} className="flex items-center group cursor-pointer">
                          <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" />
                          <span className="ml-2 text-sm text-slate-600 group-hover:text-slate-900">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Search Bar */}
          <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm flex items-center mb-8">
            <Search className="w-5 h-5 text-slate-400 ml-3" />
            <input 
              type="text" 
              placeholder="Search by part number, thread size, or keyword..." 
              className="w-full border-0 focus:ring-0 text-slate-900 px-4 py-2 outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Search
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productFamilies.map((family) => (
              <Link 
                key={family.name} 
                to={`/products/${family.name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md hover:border-blue-300 transition-all group flex flex-col"
              >
                <div className="aspect-w-4 aspect-h-3 bg-slate-100 overflow-hidden">
                  <img 
                    src={family.img} 
                    alt={family.name} 
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{family.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{family.count} Products</p>
                  <div className="mt-auto flex items-center text-sm font-medium text-blue-600">
                    View Family <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
