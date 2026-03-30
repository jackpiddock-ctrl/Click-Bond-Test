import { Search, Filter, FileText, Download, ChevronDown, File, FileDown, Eye } from "lucide-react";
import { useState } from "react";

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const resources = [
    { title: "CB200 Acrylic Adhesive Datasheet", type: "Datasheet", date: "Oct 2025", rev: "C", size: "1.2 MB" },
    { title: "Surface Preparation Guide - Composite Materials", type: "Installation Guide", date: "Aug 2025", rev: "A", size: "3.4 MB" },
    { title: "Nutplate Installation Process (Video)", type: "Training", date: "Jan 2026", rev: "-", size: "Link" },
    { title: "CB6009 Stud CAD Model (STEP)", type: "CAD Model", date: "Nov 2025", rev: "B", size: "450 KB" },
    { title: "Environmental Resistance Summary", type: "Technical Note", date: "Sep 2025", rev: "D", size: "890 KB" },
    { title: "Adhesive Selection Matrix", type: "Design Guide", date: "Feb 2026", rev: "E", size: "2.1 MB" },
    { title: "CB4000 Series Mounts Datasheet", type: "Datasheet", date: "Dec 2025", rev: "A", size: "1.5 MB" },
    { title: "Galvanic Corrosion Prevention", type: "Whitepaper", date: "Jul 2025", rev: "A", size: "4.2 MB" },
  ];

  const filters = [
    { name: "Document Type", options: ["Datasheet", "Installation Guide", "CAD Model", "Design Guide", "Whitepaper", "Training"] },
    { name: "Product Family", options: ["Studs", "Nutplates", "Mounts", "Adhesives", "Tooling"] },
    { name: "Industry", options: ["Aerospace", "Defense", "Marine", "Industrial"] },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Technical Resources</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Access our comprehensive library of datasheets, installation instructions, CAD models, and design guides to support your engineering requirements.
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
          <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm flex items-center mb-6">
            <Search className="w-5 h-5 text-slate-400 ml-3" />
            <input 
              type="text" 
              placeholder="Search documents by title, part number, or keyword..." 
              className="w-full border-0 focus:ring-0 text-slate-900 px-4 py-2 outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Search
            </button>
          </div>

          {/* Results Info */}
          <div className="flex justify-between items-center mb-4 text-sm text-slate-500">
            <span>Showing {resources.length} results</span>
            <div className="flex items-center">
              <span className="mr-2">Sort by:</span>
              <select className="border-slate-200 rounded text-slate-700 text-sm focus:ring-blue-500 focus:border-blue-500 py-1 pl-2 pr-8">
                <option>Most Relevant</option>
                <option>Newest First</option>
                <option>Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Resource List */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <div className="col-span-6">Document Title</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-1">Rev</div>
              <div className="col-span-1">Date</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {resources.map((resource, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 transition-colors">
                  <div className="col-span-1 md:col-span-6 flex items-start">
                    <FileText className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-slate-900 hover:text-blue-600 cursor-pointer">{resource.title}</h3>
                      <div className="flex items-center mt-1 text-xs text-slate-500 md:hidden space-x-3">
                        <span>{resource.type}</span>
                        <span>Rev {resource.rev}</span>
                        <span>{resource.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block col-span-2 text-sm text-slate-600">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800">
                      {resource.type}
                    </span>
                  </div>
                  <div className="hidden md:block col-span-1 text-sm text-slate-500">{resource.rev}</div>
                  <div className="hidden md:block col-span-1 text-sm text-slate-500">{resource.date}</div>
                  <div className="col-span-1 md:col-span-2 flex justify-end space-x-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Preview">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title={`Download (${resource.size})`}>
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled>Prev</button>
              <button className="px-3 py-1 rounded bg-blue-600 text-white font-medium">1</button>
              <button className="px-3 py-1 rounded border border-slate-200 text-slate-700 hover:bg-slate-50">2</button>
              <button className="px-3 py-1 rounded border border-slate-200 text-slate-700 hover:bg-slate-50">3</button>
              <span className="text-slate-500">...</span>
              <button className="px-3 py-1 rounded border border-slate-200 text-slate-500 hover:bg-slate-50">Next</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
