import { Link } from "react-router-dom";
import { ArrowRight, Plane, Shield, Ship, Train, Factory, Wrench, Rocket } from "lucide-react";

export default function Industries() {
  const industries = [
    { 
      name: "Aerospace", 
      icon: Plane, 
      desc: "Adhesive-bonded fastening solutions that reduce weight, eliminate stress concentrations from drilling, and streamline assembly in commercial and military aircraft.",
      img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop",
      path: "/industries/aerospace"
    },
    { 
      name: "Defense", 
      icon: Shield, 
      desc: "Ruggedized fastening systems designed to withstand extreme vibration, shock, and environmental conditions in land, sea, and air defense platforms.",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
      path: "/industries/defense"
    },
    { 
      name: "Marine", 
      icon: Ship, 
      desc: "Corrosion-resistant fastening technology that preserves hull integrity and eliminates galvanic corrosion pathways in naval and commercial vessels.",
      img: "https://images.unsplash.com/photo-1559405234-a29285741695?q=80&w=800&auto=format&fit=crop",
      path: "/industries/marine"
    },
    { 
      name: "Rail", 
      icon: Train, 
      desc: "High-strength attachment points for interior panels, wire routing, and exterior components that reduce assembly time and improve long-term reliability.",
      img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop",
      path: "/industries/rail"
    },
    { 
      name: "Industrial", 
      icon: Factory, 
      desc: "Versatile fastening solutions for heavy machinery, energy infrastructure, and specialized manufacturing where traditional mechanical fasteners fall short.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      path: "/industries/industrial"
    },
    { 
      name: "Interiors / MRO", 
      icon: Wrench, 
      desc: "Rapid-installation hardware for cabin interiors, galleys, and lavatories that minimizes downtime during maintenance, repair, and overhaul operations.",
      img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
      path: "/industries/interiors"
    },
    { 
      name: "Space", 
      icon: Rocket, 
      desc: "Ultra-lightweight, high-reliability fastening systems engineered for the extreme thermal and acoustic environments of launch vehicles and spacecraft.",
      img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop",
      path: "/industries/space"
    },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" 
            alt="Engineering background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Industries Served</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Click Bond's adhesive-bonded fastening systems are trusted across the world's most demanding industries to solve complex assembly challenges, reduce weight, and improve structural integrity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link 
              key={industry.name} 
              to={industry.path}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 overflow-hidden relative">
                <img 
                  src={industry.img} 
                  alt={industry.name} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                      <industry.icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold">{industry.name}</h2>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {industry.desc}
                </p>
                <div className="mt-auto flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-800 transition-colors">
                  Explore {industry.name} Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't see your industry?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our adhesive-bonded fastening technology can be adapted to solve unique challenges across virtually any sector where structural integrity, weight reduction, and corrosion mitigation are critical.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
          >
            Discuss Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}
