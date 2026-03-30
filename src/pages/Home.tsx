import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Download, ShieldCheck, Wrench, Settings, Plane, Ship, Train, Factory, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background image placeholder */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
            alt="Aerospace engineering" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Pioneering Adhesive-Bonded Fastening Systems
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Eliminate drilling, reduce weight, and protect structural integrity with advanced fastening solutions for aerospace, defense, marine, and industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                Explore Products
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-white hover:bg-slate-800 transition-colors"
              >
                Speak to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Industries Served */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">Trusted Across Sectors</h2>
            <h3 className="text-3xl font-bold text-slate-900">Engineered for Demanding Environments</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Aerospace", icon: Plane, path: "/industries/aerospace" },
              { name: "Defense", icon: Shield, path: "/industries/defense" },
              { name: "Marine", icon: Ship, path: "/industries/marine" },
              { name: "Rail", icon: Train, path: "/industries/rail" },
              { name: "Industrial", icon: Factory, path: "/industries/industrial" },
              { name: "Interiors / MRO", icon: Wrench, path: "/industries/interiors" },
            ].map((industry) => (
              <Link 
                key={industry.name} 
                to={industry.path}
                className="group flex flex-col items-center justify-center p-6 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-slate-600">
                  <industry.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{industry.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Families Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Product Solutions</h2>
              <p className="text-slate-600 max-w-2xl">Discover our comprehensive range of adhesive-bonded fasteners, designed to solve complex engineering challenges without compromising structural integrity.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
              View All Products <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Studs & Standoffs", desc: "Threaded attachment points without through-holes.", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop" },
              { name: "Nutplates", desc: "High-strength threaded receptacles for blind installations.", img: "https://images.unsplash.com/photo-1580983546130-348218726632?q=80&w=800&auto=format&fit=crop" },
              { name: "Cable Tie Mounts", desc: "Secure routing for wire harnesses and fluid lines.", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop" },
              { name: "Adhesives", desc: "Structural adhesives formulated for optimal bond strength.", img: "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?q=80&w=800&auto=format&fit=crop" },
            ].map((product, i) => (
              <Link key={i} to={`/products/${product.name.toLowerCase().replace(/ /g, '-')}`} className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all flex flex-col h-full">
                <div className="aspect-w-4 aspect-h-3 bg-slate-200 overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">{product.desc}</p>
                  <span className="text-sm font-medium text-blue-600 flex items-center mt-auto">
                    Explore <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
              View All Products <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Click Bond */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Adhesive-Bonded Advantage</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Conventional fastening methods compromise structural integrity, introduce corrosion pathways, and add unnecessary weight. Our adhesive-bonded solutions fundamentally change how structures are assembled.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "No Drilling Required", desc: "Preserve the structural integrity of advanced composites and thin-walled metals." },
                  { title: "Corrosion Mitigation", desc: "Eliminate galvanic corrosion pathways created by traditional mechanical fasteners." },
                  { title: "Weight Reduction", desc: "Reduce overall assembly weight by eliminating heavy mechanical hardware and structural reinforcements." },
                  { title: "Simplified Installation", desc: "Install in blind applications or areas with limited backside access without specialized tooling." }
                ].map((benefit, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-bold text-slate-900">{benefit.title}</h4>
                      <p className="mt-1 text-sm text-slate-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop" 
                  alt="Engineer inspecting structure" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-slate-900">40+</span>
                </div>
                <p className="text-sm font-medium text-slate-600">Years of pioneering adhesive-bonded fastening technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Technical Resources */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Engineering Resources</h2>
              <p className="text-slate-400">Access comprehensive technical data, installation guides, and CAD models to support your design and manufacturing processes.</p>
            </div>
            <Link to="/resources" className="inline-flex justify-center items-center px-5 py-2.5 border border-slate-600 text-sm font-medium rounded-md text-white hover:bg-slate-800 transition-colors whitespace-nowrap">
              View Resource Library
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "Design Guide", title: "Adhesive Selection Matrix", icon: FileText, desc: "Comprehensive guide to matching adhesives with base materials and environmental conditions." },
              { type: "Installation", title: "Surface Preparation Guidelines", icon: Wrench, desc: "Best practices for preparing composite and metallic surfaces for optimal bond strength." },
              { type: "CAD Library", title: "3D Model Downloads", icon: Download, desc: "Access STEP and IGES files for our complete product catalog to integrate into your designs." },
            ].map((resource, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">{resource.type}</span>
                  <resource.icon className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{resource.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{resource.desc}</p>
                <span className="text-sm font-medium text-blue-400 flex items-center">
                  Access Resource <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Certifications / Approvals Strip */}
      <section className="py-10 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-slate-900">Quality & Approvals</h3>
                <p className="text-xs text-slate-500">AS9100 / ISO 9001 Certified</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale">
              {/* Placeholder for certification logos */}
              <div className="text-xl font-black tracking-tighter text-slate-800">BOEING</div>
              <div className="text-xl font-black tracking-tighter text-slate-800">AIRBUS</div>
              <div className="text-xl font-black tracking-tighter text-slate-800">LOCKHEED MARTIN</div>
              <div className="text-xl font-black tracking-tighter text-slate-800">BAE SYSTEMS</div>
              <div className="text-xl font-black tracking-tighter text-slate-800">NASA</div>
            </div>
            
            <Link to="/about/quality" className="text-sm font-medium text-blue-600 hover:text-blue-800 whitespace-nowrap">
              View all certifications &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Assembly?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Connect with our application engineers to discuss your specific requirements, request samples, or find a local distributor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/quote" 
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-blue-700 bg-white hover:bg-slate-50 transition-colors shadow-lg"
            >
              Request a Quote
            </Link>
            <Link 
              to="/distributors" 
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-base font-bold rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Find a Distributor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
