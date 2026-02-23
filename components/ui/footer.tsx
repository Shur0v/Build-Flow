import { Button } from "./button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ci-ink text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-ci-safety rounded-lg flex items-center justify-center text-ci-ink font-bold text-xl">
              B
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              BuildFlow<span className="text-ci-safety">AI</span>
            </span>
          </div>
          <p className="text-ci-muted text-sm leading-relaxed">
            Revolutionizing construction intake with AI-driven renderings and real-time cost estimation. Build your dream with confidence.
          </p>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 text-ci-muted hover:text-ci-safety cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-ci-muted hover:text-ci-safety cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-ci-muted hover:text-ci-safety cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-ci-muted hover:text-ci-safety cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-ci-muted">
            <li><a href="#" className="hover:text-white transition-colors">Residential Projects</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Commercial Builds</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Renovations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AI Rendering Studio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cost Estimator</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-ci-muted">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-ci-muted">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-ci-safety" />
              123 Construction Way, Suite 100<br />Build City, BC 90210
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-ci-safety" />
              1-800-BUILD-AI
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-ci-safety" />
              hello@buildflow.ai
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ci-muted">
        <p>© 2026 BuildFlow AI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
        </div>
      </div>
    </footer>
  )
}
