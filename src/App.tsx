/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Resources from "./pages/Resources";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:category" element={<PlaceholderPage title="Product Category" />} />
          <Route path="solutions" element={<PlaceholderPage title="Solutions" />} />
          <Route path="industries" element={<Industries />} />
          <Route path="industries/:sector" element={<PlaceholderPage title="Industry Sector" />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:type" element={<PlaceholderPage title="Resource Category" />} />
          <Route path="about" element={<PlaceholderPage title="About Click Bond" />} />
          <Route path="about/quality" element={<PlaceholderPage title="Quality & Certifications" />} />
          <Route path="support" element={<PlaceholderPage title="Support" />} />
          <Route path="contact" element={<Contact />} />
          <Route path="distributors" element={<PlaceholderPage title="Distributor Locator" />} />
          <Route path="quote" element={<PlaceholderPage title="Request a Quote" />} />
          <Route path="portal" element={<PlaceholderPage title="Customer Portal" />} />
          <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
