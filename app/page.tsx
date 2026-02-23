"use client"

import * as React from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { motion, AnimatePresence } from "motion/react"
import { 
  ArrowRight, 
  Building2, 
  Home, 
  Hammer, 
  Paintbrush, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  DollarSign,
  Plus,
  ChevronRight,
  LayoutDashboard,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Filter,
  MoreVertical,
  Download,
  Share2,
  Trash2,
  Sparkles,
  Calculator,
  Image as ImageIcon,
  MapPin,
  Calendar,
  User,
  AlertCircle,
  X,
  Zap,
  Users,
  HelpCircle,
  Quote,
  Layers,
  FileText,
  Leaf,
  Globe,
  HardHat
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Stepper } from "@/components/ui/stepper"
import { FileUploader } from "@/components/ui/file-uploader"
import { cn } from "@/lib/utils"

// --- Types & Mock Data ---

type View = "landing" | "intake" | "client-dashboard" | "project-detail" | "admin-dashboard"

const PROJECT_TYPES = [
  { id: "residential", label: "Residential", icon: Home, description: "Custom homes & additions" },
  { id: "commercial", label: "Commercial", icon: Building2, description: "Office & retail spaces" },
  { id: "renovation", label: "Renovation", icon: Paintbrush, description: "Kitchens, baths & more" },
  { id: "new-build", label: "New Build", icon: Hammer, description: "Ground-up construction" },
  { id: "small-works", label: "Small Works", icon: CheckCircle2, description: "Repairs & maintenance" },
]

const MOCK_PROJECTS = [
  { id: "p1", title: "Modern Hillside Villa", type: "Residential", status: "Rendering In Progress", date: "2026-02-15", budget: "$1.2M - $1.5M" },
  { id: "p2", title: "Downtown Office Loft", type: "Commercial", status: "Proposal Ready", date: "2026-02-10", budget: "$450k - $600k" },
  { id: "p3", title: "Coastal Retreat Reno", type: "Renovation", status: "Approved", date: "2026-01-28", budget: "$150k - $200k" },
]

const FAQS = [
  {
    question: "How accurate are the AI cost estimates?",
    answer: "Our AI cost estimator uses real-time market data and historical project costs to provide estimates within a 5-10% confidence interval. While not a final contract, it provides a highly reliable baseline for project scoping."
  },
  {
    question: "Can I use the AI renderings for permits?",
    answer: "AI renderings are intended for visualization and design inspiration. For official permit applications, we provide full architectural drafting services that build upon the AI-generated concepts."
  },
  {
    question: "What project types do you support?",
    answer: "We support a wide range of projects including custom residential homes, commercial office build-outs, full-scale renovations, and specialized new builds."
  },
  {
    question: "How long does the intake process take?",
    answer: "The initial intake form takes about 10-15 minutes. Once submitted, our AI generates initial renderings and cost estimates within 24 hours."
  }
]

// --- Components for Views ---

export default function App() {
  const [view, setView] = React.useState<View>("landing")
  const [intakeStep, setIntakeStep] = React.useState(0)
  const [selectedType, setSelectedType] = React.useState<string | null>(null)

  // --- Render Helpers ---

  const renderLanding = () => (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <Badge variant="secondary" className="px-4 py-1 text-sm">
            <Sparkles className="w-3 h-3 mr-2" />
            AI-Powered Construction Intake
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-ci-ink">
            Build Your Vision <br />
            <span className="text-ci-strong">With Precision.</span>
          </h1>
          <p className="text-xl text-ci-slate leading-relaxed max-w-lg">
            Experience the future of construction. Get AI-generated renderings and real-time cost estimates in minutes, not weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="px-10" onClick={() => setView("intake")}>
              Start Project Intake
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-10">
              Request a Call
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-ci-concrete overflow-hidden">
                  <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-ci-slate">
              <span className="font-bold text-ci-ink">500+</span> Projects scoped this month
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/const/1000/1000" 
              alt="Modern Construction" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 card p-4 shadow-xl flex items-center gap-4 bg-white/90 backdrop-blur"
          >
            <div className="w-12 h-12 bg-ci-success/10 rounded-full flex items-center justify-center text-ci-success">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-ci-muted">Live Estimate</p>
              <p className="text-lg font-bold text-ci-ink">$1,240,000</p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-10 card p-4 shadow-xl flex items-center gap-4 bg-white/90 backdrop-blur"
          >
            <div className="w-12 h-12 bg-ci-safety/10 rounded-full flex items-center justify-center text-ci-safety">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-ci-muted">AI Rendering</p>
              <p className="text-sm font-bold text-ci-ink">Generating 4 variants...</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Selector */}
      <section className="bg-ci-concrete/30 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-ci-ink">What are you building?</h2>
            <p className="text-ci-slate">Select a project type to start your customized intake flow.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {PROJECT_TYPES.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setSelectedType(type.id); setView("intake"); }}
                className="card p-8 flex flex-col items-center text-center gap-4 hover:border-ci-strong hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-ci-bg rounded-2xl flex items-center justify-center text-ci-strong group-hover:bg-ci-strong group-hover:text-white transition-colors">
                  <type.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-ci-ink">{type.label}</h3>
                  <p className="text-xs text-ci-slate mt-1">{type.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-ci-strong" />
            <div>
              <p className="font-bold text-ci-ink">Fully Licensed</p>
              <p className="text-xs text-ci-slate">Bonded & Insured</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <DollarSign className="w-10 h-10 text-ci-strong" />
            <div>
              <p className="font-bold text-ci-ink">$500M+</p>
              <p className="text-xs text-ci-slate">Project Value Scoped</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="w-10 h-10 text-ci-strong" />
            <div>
              <p className="font-bold text-ci-ink">24h Turnaround</p>
              <p className="text-xs text-ci-slate">Initial Estimates</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Building2 className="w-10 h-10 text-ci-strong" />
            <div>
              <p className="font-bold text-ci-ink">15 Years</p>
              <p className="text-xs text-ci-slate">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-ci-ink text-white py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">How BuildFlow AI Works</h2>
            <p className="text-ci-muted max-w-2xl mx-auto">Our streamlined process combines human expertise with cutting-edge AI to take your project from concept to reality faster than ever.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-white/10 z-0" />
            
            {[
              { step: "01", title: "Smart Intake", desc: "Complete our guided intake form and upload site photos.", icon: FileText },
              { step: "02", title: "AI Generation", desc: "Our AI generates high-fidelity renderings and cost models.", icon: Sparkles },
              { step: "03", title: "Expert Review", desc: "Our project managers refine the scope and finalize the proposal.", icon: User },
              { step: "04", title: "Build Phase", desc: "We execute the build with real-time tracking and updates.", icon: Hammer },
            ].map((item, i) => (
              <div key={i} className="relative z-10 space-y-6 text-center">
                <div className="w-24 h-24 bg-ci-strong rounded-full flex items-center justify-center mx-auto border-4 border-ci-ink shadow-2xl">
                  <item.icon className="w-10 h-10 text-ci-safety" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-ci-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Rendering Showcase */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="border-ci-strong text-ci-strong">AI Rendering Studio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-ci-ink leading-tight">
              Visualize Your Future <br />
              <span className="text-ci-strong">Before the First Brick.</span>
            </h2>
            <p className="text-lg text-ci-slate leading-relaxed">
              Our proprietary AI engine transforms your site photos and design preferences into photorealistic renderings. Explore different styles, materials, and lighting conditions in real-time.
            </p>
            <ul className="space-y-4">
              {[
                "Photorealistic 4K Renderings",
                "Real-time Material Swapping",
                "Day/Night Lighting Simulations",
                "Multiple Architectural Styles"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-ci-ink font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-ci-success" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button size="lg" variant="primary">Explore the Studio</Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img src="https://picsum.photos/seed/render-a/600/800" alt="Modern Interior" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img src="https://picsum.photos/seed/render-b/600/600" alt="Modern Exterior" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img src="https://picsum.photos/seed/render-c/600/600" alt="Kitchen Concept" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img src="https://picsum.photos/seed/render-d/600/800" alt="Office Space" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-emerald-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/eco/1200/800" alt="Sustainable Building" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-ci-muted">Eco-Rating</p>
                <p className="text-lg font-bold text-emerald-700">LEED Platinum</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <Badge variant="outline" className="border-emerald-600 text-emerald-600">Sustainability First</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-ci-ink leading-tight">
              Building for the <br />
              <span className="text-emerald-600">Next Generation.</span>
            </h2>
            <p className="text-lg text-ci-slate leading-relaxed">
              We integrate sustainable practices into every project. From solar-ready designs to low-carbon materials, we help you build a home that&apos;s as kind to the planet as it is to your family.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-ci-ink">Solar Optimized</h4>
                <p className="text-sm text-ci-slate">AI-driven sun path analysis for maximum energy efficiency.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-ci-ink">Recycled Materials</h4>
                <p className="text-sm text-ci-slate">Sourcing high-quality, reclaimed and low-impact materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator Detail */}
      <section className="bg-ci-bg py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <Card className="p-8 shadow-2xl border-none bg-ci-ink text-white">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-ci-safety rounded-lg flex items-center justify-center text-ci-ink">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl">Live Estimator</h3>
                  </div>
                  <Badge className="bg-ci-success text-white border-none">LIVE DATA</Badge>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-white/40">
                      <span>Square Footage</span>
                      <span>4,500 sqft</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-ci-safety w-[45%]" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-[10px] text-white/40 uppercase font-bold">Materials</p>
                      <p className="text-lg font-bold">$420,000</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-[10px] text-white/40 uppercase font-bold">Labor</p>
                      <p className="text-lg font-bold">$380,000</p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-ci-strong rounded-xl">
                    <p className="text-xs text-white/60 font-bold uppercase">Estimated Total</p>
                    <p className="text-4xl font-bold text-ci-safety mt-1">$1,245,000</p>
                  </div>
                </div>
                
                <p className="text-xs text-white/40 italic">
                  * Estimates are based on current market rates for materials and labor in your region.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <Badge variant="outline" className="border-ci-strong text-ci-strong">Real-Time Cost Modeling</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-ci-ink leading-tight">
              Budget With <br />
              <span className="text-ci-strong">Absolute Confidence.</span>
            </h2>
            <p className="text-lg text-ci-slate leading-relaxed">
              No more guesswork. Our AI analyzes thousands of data points to provide accurate cost models instantly. Adjust your scope, materials, or timeline and see the impact on your budget in real-time.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Zap className="w-8 h-8 text-ci-safety" />
                <h4 className="font-bold text-ci-ink">Instant Updates</h4>
                <p className="text-sm text-ci-slate">Change a parameter, see the price change instantly.</p>
              </div>
              <div className="space-y-2">
                <Layers className="w-8 h-8 text-ci-safety" />
                <h4 className="font-bold text-ci-ink">Market-Linked</h4>
                <p className="text-sm text-ci-slate">Directly connected to local material supplier pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Quality Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <Badge variant="outline" className="border-ci-safety text-ci-safety">Safety First</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-ci-ink leading-tight">
              Uncompromising <br />
              <span className="text-ci-safety">Safety Standards.</span>
            </h2>
            <p className="text-lg text-ci-slate leading-relaxed">
              Safety isn&apos;t just a checkbox; it&apos;s our culture. We employ advanced site monitoring and rigorous safety protocols to ensure every worker and every client is protected throughout the build.
            </p>
            <div className="space-y-4">
              {[
                { title: "Zero-Incident Goal", desc: "Our track record speaks for itself with industry-leading safety metrics." },
                { title: "AI Site Monitoring", desc: "Real-time hazard detection using computer vision on-site." },
                { title: "Certified Professionals", desc: "Every lead on site is OSHA-30 certified and highly trained." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-ci-concrete hover:border-ci-safety/20 transition-colors">
                  <HardHat className="w-6 h-6 text-ci-safety shrink-0" />
                  <div>
                    <p className="font-bold text-ci-ink">{item.title}</p>
                    <p className="text-sm text-ci-slate">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] rounded-3xl bg-ci-concrete overflow-hidden">
              <img src="https://picsum.photos/seed/safety1/600/800" alt="Safety Gear" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] rounded-3xl bg-ci-concrete overflow-hidden mt-12">
              <img src="https://picsum.photos/seed/safety2/600/800" alt="Site Inspection" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-ci-ink">Trusted by Visionaries</h2>
            <p className="text-ci-slate">See what our clients are building with BuildFlow AI.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Homeowner", text: "The AI renderings were a game-changer. We could see exactly how the light would hit our new kitchen before we even broke ground.", img: "1" },
              { name: "David Chen", role: "Property Developer", text: "BuildFlow's cost estimator is remarkably accurate. It's saved us weeks of back-and-forth with contractors during the scoping phase.", img: "2" },
              { name: "Marcus Thorne", role: "Architect", text: "As an architect, this tool helps me communicate complex ideas to clients instantly. It's the perfect bridge between vision and reality.", img: "3" },
            ].map((t, i) => (
              <Card key={i} className="p-8 space-y-6 hover:shadow-xl transition-shadow border-ci-concrete/50">
                <Quote className="w-10 h-10 text-ci-safety/20" />
                <p className="text-ci-slate italic leading-relaxed">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4 pt-4 border-t border-ci-concrete">
                  <div className="w-12 h-12 rounded-full bg-ci-concrete overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${t.img}/100/100`} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-ci-ink">{t.name}</p>
                    <p className="text-xs text-ci-muted font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage Section */}
      <section className="py-24 px-6 bg-ci-ink text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="border-ci-safety text-ci-safety">Regional Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building Communities <br />
              <span className="text-ci-safety">Across the Nation.</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              From urban lofts to sprawling estates, our regional teams bring deep local knowledge to every project. We understand local zoning, climate challenges, and material availability.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["San Francisco", "Los Angeles", "Seattle", "Austin", "New York", "Miami"].map(city => (
                <div key={city} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Globe className="w-4 h-4 text-ci-safety" />
                  <span className="font-semibold">{city}</span>
                </div>
              ))}
            </div>
            <Button variant="secondary" size="lg">Check Your Location</Button>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/map/1000/1000" alt="Regional Map" className="w-full h-full object-cover opacity-50 grayscale" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-4 h-4 bg-ci-safety rounded-full animate-ping absolute inset-0" />
                <div className="w-4 h-4 bg-ci-safety rounded-full relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-ci-bg">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-ci-ink">Frequently Asked Questions</h2>
            <p className="text-ci-slate">Everything you need to know about our process and technology.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <Card key={i} className="overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-bold text-ci-ink">{faq.question}</span>
                    <Plus className="w-5 h-5 text-ci-muted group-open:rotate-45 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-ci-slate text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </Card>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <p className="text-ci-slate mb-4">Still have questions?</p>
            <Button variant="outline">Visit our Help Center</Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-ci-strong rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-ci-safety/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to Build Your <br />
              <span className="text-ci-safety">Dream Project?</span>
            </h2>
            <p className="text-white/70 text-lg">
              Join hundreds of homeowners and developers who are building smarter with BuildFlow AI. Start your intake today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="px-12" onClick={() => setView("intake")}>
                Start Project Intake
              </Button>
              <Button size="lg" variant="outline" className="px-12 text-white border-white/20 hover:bg-white/10">
                Speak to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const renderIntake = () => {
    const steps = ["Overview", "Location", "Scope", "Uploads", "Schedule", "Review"]
    
    return (
      <div className="pt-32 pb-20 px-6 min-h-screen bg-ci-bg">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-ci-ink">Project Intake</h1>
              <p className="text-ci-slate">Step {intakeStep + 1} of {steps.length}: {steps[intakeStep]}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setView("landing")}>Cancel</Button>
              <Button variant="outline" size="sm">Save as Draft</Button>
            </div>
          </div>

          {/* Stepper */}
          <Stepper steps={steps} currentStep={intakeStep} />

          {/* Form Content */}
          <motion.div
            key={intakeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-8 md:p-12 space-y-8"
          >
            {intakeStep === 0 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ci-ink">Project Title</label>
                    <Input placeholder="e.g. Modern Kitchen Remodel" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ci-ink">Project Type</label>
                    <select className="input-field appearance-none">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Renovation</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ci-ink">Brief Description</label>
                  <textarea 
                    className="input-field min-h-[120px] py-4" 
                    placeholder="Tell us about your vision..."
                    maxLength={250}
                  />
                  <p className="text-[10px] text-ci-muted text-right">0 / 250 characters</p>
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-ci-ink">Budget Range</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["$10k-$50k", "$50k-$150k", "$150k-$500k", "$500k+"].map(range => (
                      <button key={range} className="p-3 border rounded-lg text-sm font-semibold hover:border-ci-strong hover:bg-ci-strong/5 transition-all">
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {intakeStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ci-ink">Property Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ci-muted" />
                    <Input className="pl-12" placeholder="Start typing address..." />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ci-ink">Property Type</label>
                    <Input placeholder="e.g. Single Family Home" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ci-ink">Lot Size (sqft)</label>
                    <Input type="number" placeholder="0" />
                  </div>
                </div>
                <div className="aspect-video bg-ci-concrete rounded-xl flex items-center justify-center text-ci-muted border-2 border-dashed border-ci-muted/20">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2 opacity-20" />
                    <p className="text-sm">Map Preview Placeholder</p>
                  </div>
                </div>
              </div>
            )}

            {intakeStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-ci-ink">Upload Site Photos & Blueprints</h3>
                  <p className="text-sm text-ci-slate">Clear photos of the current site help our AI generate more accurate renderings.</p>
                </div>
                <FileUploader />
              </div>
            )}

            {intakeStep === 5 && (
              <div className="space-y-8">
                <div className="p-6 bg-ci-strong/5 rounded-xl border border-ci-strong/10 flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-ci-strong shrink-0 mt-1" />
                  <div className="space-y-1">
                    <p className="font-bold text-ci-strong">AI Rendering Request</p>
                    <p className="text-sm text-ci-slate">By submitting, you agree to allow our AI to process your photos to generate project renderings. This is for visualization purposes only.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-bold text-ci-ink">Summary</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-4 bg-ci-bg rounded-lg">
                      <p className="text-ci-muted font-bold uppercase text-[10px]">Project</p>
                      <p className="font-bold">Modern Kitchen Remodel</p>
                    </div>
                    <div className="p-4 bg-ci-bg rounded-lg">
                      <p className="text-ci-muted font-bold uppercase text-[10px]">Budget</p>
                      <p className="font-bold">$50k - $150k</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="consent" className="w-4 h-4 rounded border-ci-concrete text-ci-strong focus:ring-ci-strong" />
                  <label htmlFor="consent" className="text-sm text-ci-slate">I agree to the terms and conditions and privacy policy.</label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-ci-concrete">
              <Button 
                variant="outline" 
                onClick={() => setIntakeStep(Math.max(0, intakeStep - 1))}
                disabled={intakeStep === 0}
              >
                Previous
              </Button>
              {intakeStep < steps.length - 1 ? (
                <Button onClick={() => setIntakeStep(intakeStep + 1)}>
                  Next Step
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button variant="secondary" onClick={() => setView("client-dashboard")}>
                  Submit Project
                  <CheckCircle2 className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          </motion.div>
          
          <p className="text-center text-xs text-ci-muted">
            Autosaved at 2:45 PM. Your progress is secure.
          </p>
        </div>
      </div>
    )
  }

  const renderClientDashboard = () => (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-ci-bg">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-ci-ink">My Projects</h1>
            <p className="text-ci-slate">Welcome back, John. You have 3 active projects.</p>
          </div>
          <Button onClick={() => setView("intake")}>
            <Plus className="w-4 h-4 mr-2" />
            New Project Intake
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-ci-strong text-white border-none">
            <CardContent className="p-6 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Active Projects</p>
                <p className="text-3xl font-bold">03</p>
              </div>
              <LayoutDashboard className="w-10 h-10 text-white/20" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-ci-muted text-xs font-bold uppercase tracking-wider">Avg Response Time</p>
                <p className="text-3xl font-bold text-ci-ink">2.4h</p>
              </div>
              <Clock className="w-10 h-10 text-ci-concrete" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-ci-muted text-xs font-bold uppercase tracking-wider">Messages</p>
                <p className="text-3xl font-bold text-ci-ink">12</p>
              </div>
              <MessageSquare className="w-10 h-10 text-ci-concrete" />
            </CardContent>
          </Card>
        </div>

        {/* Project List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl text-ci-ink">Recent Activity</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
              <Button variant="ghost" size="sm"><Search className="w-4 h-4 mr-2" /> Search</Button>
            </div>
          </div>
          
          <div className="grid gap-4">
            {MOCK_PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.005 }}
                className="card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-ci-strong transition-all cursor-pointer"
                onClick={() => setView("project-detail")}
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-ci-concrete overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/seed/${project.id}/200/200`} alt="project" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-lg text-ci-ink">{project.title}</h3>
                      <Badge variant={project.status === "Approved" ? "success" : project.status === "Proposal Ready" ? "secondary" : "default"}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-ci-slate">
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {project.type}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Updated {project.date}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {project.budget}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm">Message Team</Button>
                  <Button size="sm">View Details</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const [showRenderStudio, setShowRenderStudio] = React.useState(false)
  const [showEstimator, setShowEstimator] = React.useState(false)

  const renderProjectDetail = () => (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-ci-bg">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-ci-muted">
          <button onClick={() => setView("client-dashboard")} className="hover:text-ci-strong">Dashboard</button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-ci-ink font-bold">Modern Hillside Villa</span>
        </div>

        {/* Hero */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold text-ci-ink">Modern Hillside Villa</h1>
              <Badge variant="default" className="bg-ci-strong">Rendering In Progress</Badge>
            </div>
            <p className="text-ci-slate flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 123 Skyview Terrace, Build City, BC
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline"><Share2 className="w-4 h-4 mr-2" /> Share</Button>
            <Button variant="secondary"><Download className="w-4 h-4 mr-2" /> Export PDF</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery / Renderings */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>AI Renderings</CardTitle>
                  <CardDescription>Draft visualizations based on your site photos</CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => setShowRenderStudio(true)}>
                  <Sparkles className="w-4 h-4 mr-2 text-ci-safety" />
                  Open Studio
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-xl bg-ci-concrete overflow-hidden relative group">
                  <img src="https://picsum.photos/seed/render1/1200/800" alt="Render" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button variant="secondary" size="sm">View Fullscreen</Button>
                    <Button variant="outline" size="sm" className="bg-white">Download</Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-ci-safety text-ci-ink border-none">AI DRAFT</Badge>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square rounded-lg bg-ci-concrete overflow-hidden cursor-pointer border-2 border-transparent hover:border-ci-strong transition-all">
                      <img src={`https://picsum.photos/seed/render${i+1}/300/300`} alt="thumb" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cost Estimate */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Cost Estimate</CardTitle>
                  <CardDescription>Real-time breakdown based on current scope</CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-ci-ink">$1,425,000</p>
                  <p className="text-xs text-ci-success font-bold">± 5% Confidence</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: "Site Preparation & Foundation", cost: "$185,000" },
                    { label: "Structural Framing", cost: "$320,000" },
                    { label: "Exterior Finishes & Roofing", cost: "$210,000" },
                    { label: "Interior Systems (MEP)", cost: "$245,000" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-ci-concrete last:border-0">
                      <span className="text-sm font-semibold text-ci-slate">{item.label}</span>
                      <span className="text-sm font-bold text-ci-ink">{item.cost}</span>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full text-ci-strong font-bold" onClick={() => setShowEstimator(true)}>
                    View Full Detailed Breakdown
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Status & Next Steps */}
            <Card className="bg-ci-strong text-white border-none">
              <CardHeader>
                <CardTitle className="text-xl">Next Steps</CardTitle>
                <CardDescription className="text-white/60">Your project is moving forward</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-ci-success flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold">Intake Submitted</p>
                      <p className="text-xs text-white/60">Feb 15, 2026</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-ci-safety text-ci-ink flex items-center justify-center shrink-0 animate-pulse">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold">AI Rendering Generation</p>
                      <p className="text-xs text-white/60">In progress (Est. 2h remaining)</p>
                    </div>
                  </div>
                  <div className="flex gap-4 opacity-40">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold">Proposal Review</p>
                      <p className="text-xs text-white/60">Pending renderings</p>
                    </div>
                  </div>
                </div>
                <Button variant="secondary" className="w-full">
                  Approve Current Scope
                </Button>
              </CardContent>
            </Card>

            {/* Communication Hub */}
            <Card className="flex flex-col h-[500px]">
              <CardHeader className="border-b border-ci-concrete">
                <CardTitle className="text-lg">Project Chat</CardTitle>
                <CardDescription>Direct line to your PM team</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex flex-col gap-1 items-start">
                  <div className="bg-ci-concrete p-3 rounded-2xl rounded-tl-none text-sm max-w-[80%]">
                    Hi John! We&apos;ve received your site photos. The AI is currently processing the hillside elevation.
                  </div>
                  <span className="text-[10px] text-ci-muted ml-1">PM Team • 10:30 AM</span>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <div className="bg-ci-strong text-white p-3 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                    Great, thanks! Can we make sure the deck is oriented towards the sunset?
                  </div>
                  <span className="text-[10px] text-ci-muted mr-1">You • 10:35 AM</span>
                </div>
                <div className="bg-ci-safety/10 border border-ci-safety/20 p-3 rounded-xl flex gap-3">
                  <Sparkles className="w-5 h-5 text-ci-safety shrink-0" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-ci-safety uppercase">Suggested by Assistant</p>
                    <p className="text-xs text-ci-ink">Ask about material alternatives for the deck to reduce maintenance costs.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 border-t border-ci-concrete">
                <div className="flex w-full gap-2">
                  <Input placeholder="Type a message..." className="flex-1" />
                  <Button size="icon"><ArrowRight className="w-4 h-4" /></Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Render Studio Modal */}
        <AnimatePresence>
          {showRenderStudio && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setShowRenderStudio(false)}
                className="absolute inset-0 bg-ci-ink/60 backdrop-blur-sm" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              >
                <div className="flex-1 bg-ci-concrete p-8 flex items-center justify-center relative">
                  <img src="https://picsum.photos/seed/render-studio/1200/800" alt="Studio" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute top-12 left-12 flex flex-col gap-4">
                    <Badge className="bg-ci-strong text-white px-4 py-2 text-sm">AI GENERATING...</Badge>
                    <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full bg-ci-safety"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-80 border-l border-ci-concrete p-8 space-y-8 overflow-y-auto">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">Studio Controls</h3>
                    <button onClick={() => setShowRenderStudio(false)}><X className="w-5 h-5 text-ci-muted" /></button>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-ci-muted">Style Preset</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Modern", "Industrial", "Coastal", "Traditional"].map(s => (
                        <Button key={s} variant="outline" size="sm" className="text-xs">{s}</Button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-ci-muted">Time of Day</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Golden Hour", "Midday", "Twilight", "Night"].map(s => (
                        <Button key={s} variant="outline" size="sm" className="text-xs">{s}</Button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-ci-muted">AI Prompt</label>
                    <textarea className="input-field text-xs min-h-[100px]" defaultValue="Modern hillside villa with floor-to-ceiling windows, cedar accents, and an infinity pool overlooking the valley." />
                  </div>
                  <Button className="w-full" variant="secondary">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Regenerate Variants
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Cost Estimator Modal */}
        <AnimatePresence>
          {showEstimator && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setShowEstimator(false)}
                className="absolute inset-0 bg-ci-ink/60 backdrop-blur-sm" 
              />
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="p-8 border-b border-ci-concrete flex items-center justify-between bg-ci-bg">
                  <div>
                    <h3 className="font-bold text-2xl">Interactive Cost Estimator</h3>
                    <p className="text-sm text-ci-slate">Adjust parameters to see real-time pricing impact.</p>
                  </div>
                  <button onClick={() => setShowEstimator(false)} className="p-2 hover:bg-ci-concrete rounded-full transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="font-bold text-ci-ink">Square Footage</label>
                        <span className="text-ci-strong font-bold">3,250 sqft</span>
                      </div>
                      <input type="range" className="w-full accent-ci-strong" min="1000" max="10000" defaultValue="3250" />
                    </div>
                    <div className="space-y-4">
                      <label className="font-bold text-ci-ink">Finish Quality</label>
                      <div className="grid grid-cols-3 gap-3">
                        {["Basic", "Standard", "Premium"].map(q => (
                          <button key={q} className={cn("p-3 border rounded-xl text-sm font-bold transition-all", q === "Premium" ? "border-ci-strong bg-ci-strong text-white" : "hover:border-ci-strong")}>
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="font-bold text-ci-ink">Material Selection</label>
                      <div className="space-y-2">
                        {["Sustainable Cedar", "Polished Concrete", "Triple-Glazed Glass"].map(m => (
                          <div key={m} className="flex items-center justify-between p-3 bg-ci-bg rounded-lg border border-ci-concrete">
                            <span className="text-sm font-semibold">{m}</span>
                            <input type="checkbox" defaultChecked className="w-4 h-4 accent-ci-strong" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="card bg-ci-ink text-white p-8 flex flex-col justify-between">
                    <div className="space-y-6">
                      <h4 className="text-white/60 font-bold uppercase tracking-widest text-xs">Estimate Summary</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-white/60">Base Construction</span>
                          <span className="font-bold">$980,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Premium Finishes</span>
                          <span className="font-bold">$245,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Sustainable Materials</span>
                          <span className="font-bold">$120,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Contingency (10%)</span>
                          <span className="font-bold">$134,500</span>
                        </div>
                      </div>
                      <hr className="border-white/10" />
                      <div className="flex justify-between items-end">
                        <span className="text-white/60">Total Estimated Cost</span>
                        <span className="text-4xl font-bold text-ci-safety">$1,479,500</span>
                      </div>
                    </div>
                    <Button variant="secondary" className="w-full mt-8">
                      Update Project Proposal
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  const renderAdminDashboard = () => (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-ci-bg">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-ci-ink">Admin Command Center</h1>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-white">System Status: Optimal</Badge>
            <Button variant="outline" size="sm"><Settings className="w-4 h-4 mr-2" /> Settings</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "New Intakes", value: "12", color: "bg-ci-strong" },
            { label: "Pending Renders", value: "08", color: "bg-ci-safety" },
            { label: "Active Estimates", value: "24", color: "bg-ci-success" },
            { label: "Overdue Responses", value: "02", color: "bg-ci-safety" },
          ].map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-ci-muted uppercase tracking-wider">{stat.label}</p>
                  <p className="text-3xl font-bold text-ci-ink">{stat.value}</p>
                </div>
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white", stat.color)}>
                  <LayoutDashboard className="w-6 h-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Intake Queue</CardTitle>
              <CardDescription>Review and assign new project requests</CardDescription>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Search queue..." className="w-64 h-9" />
              <Button variant="outline" size="sm">Export CSV</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-ci-concrete text-xs font-bold text-ci-muted uppercase tracking-wider">
                    <th className="pb-4 pt-2 px-4">Project</th>
                    <th className="pb-4 pt-2 px-4">Contact</th>
                    <th className="pb-4 pt-2 px-4">Type</th>
                    <th className="pb-4 pt-2 px-4">Priority</th>
                    <th className="pb-4 pt-2 px-4">Status</th>
                    <th className="pb-4 pt-2 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { name: "Modern Hillside Villa", client: "John Doe", type: "Residential", priority: "High", status: "New" },
                    { name: "Downtown Office Loft", client: "Jane Smith", type: "Commercial", priority: "Medium", status: "Reviewing" },
                    { name: "Coastal Retreat Reno", client: "Mike Ross", type: "Renovation", priority: "Low", status: "On Hold" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-ci-concrete last:border-0 hover:bg-ci-bg/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-ci-ink">{row.name}</td>
                      <td className="py-4 px-4 text-ci-slate">{row.client}</td>
                      <td className="py-4 px-4 text-ci-slate">{row.type}</td>
                      <td className="py-4 px-4">
                        <Badge variant={row.priority === "High" ? "danger" : "muted"}>{row.priority}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline">{row.status}</Badge>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        onStartClick={() => setView("intake")}
        onLoginClick={() => setView("client-dashboard")}
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {view === "landing" && renderLanding()}
            {view === "intake" && renderIntake()}
            {view === "client-dashboard" && renderClientDashboard()}
            {view === "project-detail" && renderProjectDetail()}
            {view === "admin-dashboard" && renderAdminDashboard()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* View Switcher (Prototype Only) */}
      <div className="fixed bottom-6 right-6 z-[100] flex gap-2 p-2 bg-white/80 backdrop-blur border border-ci-concrete rounded-full shadow-2xl">
        <Button variant="ghost" size="sm" className={cn("rounded-full", view === "landing" && "bg-ci-concrete")} onClick={() => setView("landing")}>Public</Button>
        <Button variant="ghost" size="sm" className={cn("rounded-full", view === "intake" && "bg-ci-concrete")} onClick={() => setView("intake")}>Intake</Button>
        <Button variant="ghost" size="sm" className={cn("rounded-full", view === "client-dashboard" && "bg-ci-concrete")} onClick={() => setView("client-dashboard")}>Client</Button>
        <Button variant="ghost" size="sm" className={cn("rounded-full", view === "admin-dashboard" && "bg-ci-concrete")} onClick={() => setView("admin-dashboard")}>Admin</Button>
      </div>

      <Footer />
    </div>
  )
}
