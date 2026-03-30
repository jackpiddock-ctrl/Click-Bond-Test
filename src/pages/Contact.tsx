import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [enquiryType, setEnquiryType] = useState("quote");

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Get in touch with our engineering team, request a quote, or find a distributor in your region. We're here to support your assembly challenges.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                  <input type="text" id="firstName" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                  <input type="text" id="lastName" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                  <input type="email" id="email" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company *</label>
                  <input type="text" id="company" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" required />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">Country / Region *</label>
                  <select id="country" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" required>
                    <option value="">Select a country...</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="JP">Japan</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">How can we help you? *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "quote", label: "Request a Quote" },
                    { id: "technical", label: "Technical Support" },
                    { id: "sample", label: "Request Samples" },
                    { id: "distributor", label: "Find a Distributor" },
                    { id: "general", label: "General Enquiry" },
                  ].map((type) => (
                    <label key={type.id} className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${enquiryType === type.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:bg-slate-50'}`}>
                      <input 
                        type="radio" 
                        name="enquiryType" 
                        value={type.id} 
                        checked={enquiryType === type.id}
                        onChange={() => setEnquiryType(type.id)}
                        className="text-blue-600 focus:ring-blue-500 w-4 h-4" 
                      />
                      <span className={`ml-2 text-sm ${enquiryType === type.id ? 'font-medium text-blue-900' : 'text-slate-700'}`}>
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message / Application Details *</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" 
                  placeholder="Please provide details about your application, base materials, environmental conditions, or specific part numbers..."
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors shadow-sm flex justify-center items-center">
                  Submit Enquiry <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <p className="text-xs text-slate-500 mt-4">
                  By submitting this form, you agree to our Privacy Policy and consent to being contacted regarding your enquiry.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info & Locations */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Global Headquarters</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-slate-600">
                    2151 Lockheed Way<br />
                    Carson City, NV 89706<br />
                    United States
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <p className="text-sm text-slate-600">+1 (775) 885-8000</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <a href="mailto:sales@clickbond.com" className="text-sm text-blue-600 hover:underline">sales@clickbond.com</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">European Office</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-slate-600">
                    Unit 1, The IO Centre<br />
                    Salbrook Road, Salfords<br />
                    Redhill, Surrey RH1 5GJ<br />
                    United Kingdom
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <p className="text-sm text-slate-600">+44 (0) 1293 774 774</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <a href="mailto:eusales@clickbond.com" className="text-sm text-blue-600 hover:underline">eusales@clickbond.com</a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm text-white">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-lg font-bold">Global Distribution</h3>
              </div>
              <p className="text-sm text-slate-300 mb-6">
                We have a worldwide network of authorized distributors and representatives ready to support your local requirements.
              </p>
              <button className="w-full px-4 py-2 border border-slate-600 hover:bg-slate-800 text-sm font-medium rounded transition-colors text-center">
                Find a Local Distributor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
