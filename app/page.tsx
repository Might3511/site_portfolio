"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Download,
  TrendingUp,
  Users,
  Briefcase,
  AlertTriangle,
  HardHat,
  Shield,
  Eye,
  BookOpen,
  Monitor,
  Cpu,
  Globe,
  Calendar,
  Award,
  Building,
  GraduationCap,
  Zap,
  Target,
  ChevronDown,
} from "lucide-react"

export default function Component() {
  const [isVisible, setIsVisible] = useState({
    about: false,
    carriere: false,
    swot: false,
    safety: false,
    pix: false,
    participation: false,
  })

  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section")
            if (section) {
              setIsVisible((prev) => ({ ...prev, [section]: true }))
              setActiveSection(section)
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleDownloadCV = async () => {
    try {
      // URL directe vers le PDF hébergé
      const pdfUrl = "/cv-matteo-debin.pdf"

      // Créer un lien de téléchargement
      const link = document.createElement("a")
      link.href = pdfUrl
      link.download = "CV-Matteo-Debin.pdf"
      link.target = "_blank"

      // Déclencher le téléchargement
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Erreur lors du téléchargement:", error)
      // Fallback : ouvrir le PDF dans un nouvel onglet
      window.open("/cv-matteo-debin.pdf", "_blank")
    }
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gradient">E-PORTFOLIO</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "about-me", label: "About Me", icon: Users },
                { id: "carriere", label: "Parcours", icon: GraduationCap },
                { id: "swot", label: "SWOT", icon: Target },
                { id: "safety", label: "Safety", icon: Shield },
                { id: "pix", label: "PIX", icon: Monitor },
                { id: "participation", label: "Participation", icon: Calendar },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === id.replace("-", "")
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-slate-700 hover:text-blue-600 hover:bg-white/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gradient mb-6 tracking-tight">
              Matteo Debin
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 font-light">
              Étudiant en Automatisation • Passionné par l'IoT & la Domotique
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => scrollToSection("about-me")}
                variant="outline"
                className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
              >
                Découvrir mon profil
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </header>

      {/* About Me Section */}
      <section
        id="about-me"
        data-section="about"
        className={`py-20 px-4 transition-all duration-1000 ${
          isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">À propos de moi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-effect rounded-3xl p-8 lg:p-12 shadow-2xl card-hover">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Mon Parcours</h3>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Je suis actuellement en 3e année de Bachelor en automatisation. Né le 6 septembre 2003. J'aime
                l'automatisation, les projets électroniques, l'IoT et la domotique.
              </p>
              <p className="text-blue-600 font-medium">Mon CV est disponible en téléchargement en bas de page.</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Cpu, title: "Automatisation", desc: "Systèmes intelligents" },
                { icon: Zap, title: "IoT", desc: "Objets connectés" },
                { icon: Building, title: "Domotique", desc: "Maison intelligente" },
                { icon: Globe, title: "Innovation", desc: "Technologies émergentes" },
              ].map((item, index) => (
                <Card key={index} className="glass-effect border-0 shadow-lg card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mx-auto mb-4 w-fit">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carrière Section */}
      <section
        id="carriere"
        data-section="carriere"
        className={`py-20 px-4 bg-gradient-to-br from-emerald-50/50 to-teal-50/30 transition-all duration-1000 ${
          isVisible.carriere ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Mon Parcours Académique</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full hidden lg:block"></div>

            <div className="space-y-12">
              {/* EPHEC - Bachelor */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:text-right lg:pr-8">
                  <Card className="glass-effect shadow-xl border-0 card-hover">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center lg:justify-end mb-4">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-4 shadow-lg">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          2022-2025
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">EPHEC</h3>
                      <p className="text-lg text-slate-600 font-medium">Bachelor en Automatisation</p>
                      <p className="text-slate-500 mt-2">
                        Formation complète en systèmes automatisés, électronique et programmation industrielle
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="lg:w-1/2"></div>
              </div>

              {/* TFE Domotique */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2"></div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="lg:w-1/2 lg:pl-8">
                  <Card className="glass-effect shadow-xl border-0 card-hover">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full mr-4 shadow-lg">
                          <Building className="h-6 w-6 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          2025
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">TFE en Domotique</h3>
                      <p className="text-lg text-slate-600 font-medium">Travail de Fin d'Études</p>
                      <p className="text-slate-500 mt-2">
                        Projet de recherche et développement en systèmes domotiques intelligents
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* HE2B - Futur */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:text-right lg:pr-8">
                  <Card className="glass-effect shadow-xl border-0 card-hover border-2 border-dashed border-purple-300">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center lg:justify-end mb-4">
                        <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-3 rounded-full mr-4 shadow-lg">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Futur
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">HE2B</h3>
                      <p className="text-lg text-slate-600 font-medium">Ingénieur Industriel en Électronique</p>
                      <p className="text-slate-500 mt-2">
                        Spécialisation avancée en ingénierie électronique et systèmes embarqués
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot - future */}
                <div className="hidden lg:block w-6 h-6 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full border-4 border-white shadow-lg z-10 opacity-70"></div>

                <div className="lg:w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {[
              {
                title: "EPHEC",
                subtitle: "Bachelor en Automatisation",
                year: "2022-2025",
                description: "Formation complète en systèmes automatisés, électronique et programmation industrielle",
                icon: GraduationCap,
                gradient: "from-emerald-500 to-teal-600",
                status: "current",
              },
              {
                title: "TFE en Domotique",
                subtitle: "Travail de Fin d'Études",
                year: "2025",
                description: "Projet de recherche et développement en systèmes domotiques intelligents",
                icon: Building,
                gradient: "from-blue-500 to-indigo-600",
                status: "current",
              },
              {
                title: "HE2B",
                subtitle: "Ingénieur Industriel en Électronique",
                year: "Futur",
                description: "Spécialisation avancée en ingénierie électronique et systèmes embarqués",
                icon: Zap,
                gradient: "from-purple-500 to-violet-600",
                status: "future",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`glass-effect shadow-xl border-0 card-hover ${item.status === "future" ? "border-2 border-dashed border-purple-300" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`bg-gradient-to-r ${item.gradient} p-3 rounded-full mr-4 shadow-lg ${item.status === "future" ? "opacity-70" : ""}`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span
                      className={`bg-gradient-to-r ${item.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${item.status === "future" ? "opacity-70" : ""}`}
                    >
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-lg text-slate-600 font-medium mb-2">{item.subtitle}</p>
                  <p className="text-slate-500">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SWOT Analysis Section */}
      <section
        id="swot"
        data-section="swot"
        className={`py-20 px-4 bg-gradient-to-br from-slate-100/50 to-blue-100/30 transition-all duration-1000 ${
          isVisible.swot ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Analyse SWOT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Forces",
                icon: TrendingUp,
                items: ["Apprend vite", "Aime le code"],
                gradient: "from-green-500 to-emerald-600",
                bg: "from-green-50 to-emerald-50",
                border: "border-green-200",
              },
              {
                title: "Faiblesses",
                icon: Users,
                items: ["N'aime pas parler en public", "Peu d'expérience professionnelle"],
                gradient: "from-red-500 to-rose-600",
                bg: "from-red-50 to-rose-50",
                border: "border-red-200",
              },
              {
                title: "Opportunités",
                icon: Briefcase,
                items: ["Domaine en forte demande d'emploi", "Accès quasi infini à l'information aujourd'hui"],
                gradient: "from-blue-500 to-cyan-600",
                bg: "from-blue-50 to-cyan-50",
                border: "border-blue-200",
              },
              {
                title: "Menaces",
                icon: AlertTriangle,
                items: ["Domaine qui évolue très vite"],
                gradient: "from-orange-500 to-amber-600",
                bg: "from-orange-50 to-amber-50",
                border: "border-orange-200",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${category.bg} ${category.border} shadow-xl card-hover border-2`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${category.gradient} p-4 rounded-full mr-4 shadow-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mr-3 mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-slate-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section
        id="safety"
        data-section="safety"
        className={`py-20 px-4 transition-all duration-1000 ${
          isVisible.safety ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Sécurité au Travail</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="glass-effect rounded-3xl p-8 lg:p-12 shadow-2xl mb-12">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 rounded-2xl flex-shrink-0 shadow-xl">
                <HardHat className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Formation Technios Serious Game</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Dans le cadre de mon parcours universitaire, j'ai suivi une formation en ligne sur la prévention et la
                  sécurité au travail via la plateforme interactive « Technios Serious Game ».
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Cette formation immersive m'a permis de consolider mes connaissances théoriques et de développer des
                  compétences pratiques en matière de sécurité au travail. J'y ai appris les règles fondamentales à
                  respecter, les procédures à suivre en cas d'urgence, ainsi que les bonnes pratiques pour prévenir les
                  risques professionnels.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Identification des risques",
                icon: Eye,
                gradient: "from-red-500 to-pink-600",
                bg: "from-red-50 to-pink-50",
              },
              {
                title: "Procédures de sécurité",
                icon: Shield,
                gradient: "from-blue-500 to-indigo-600",
                bg: "from-blue-50 to-indigo-50",
              },
              {
                title: "Connaissances théoriques",
                icon: BookOpen,
                gradient: "from-green-500 to-teal-600",
                bg: "from-green-50 to-teal-50",
              },
            ].map((item, index) => (
              <Card key={index} className={`bg-gradient-to-br ${item.bg} shadow-xl card-hover border-0`}>
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-r ${item.gradient} p-4 rounded-2xl mx-auto mb-6 w-fit shadow-lg`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PIX Section */}
      <section
        id="pix"
        data-section="pix"
        className={`py-20 px-4 bg-gradient-to-br from-purple-50/50 to-indigo-50/30 transition-all duration-1000 ${
          isVisible.pix ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Compétences Numériques</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="glass-effect rounded-3xl p-8 lg:p-12 shadow-2xl text-center">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-2xl mx-auto mb-8 w-fit shadow-xl">
              <Monitor className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Certification PIX</h3>
            <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
              Dans le cadre de mes études à l'EPHEC, j'ai renforcé mes compétences numériques grâce à la plateforme PIX.
              Cette évaluation en ligne m'a permis de progresser dans plusieurs domaines clés : la gestion de
              l'information, la communication, la création de contenus numériques, la cybersécurité et la résolution de
              problèmes.
            </p>
          </div>
        </div>
      </section>

      {/* Participation Section */}
      <section
        id="participation"
        data-section="participation"
        className={`py-20 px-4 transition-all duration-1000 ${
          isVisible.participation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Expériences et Participations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Salon Indumation",
                year: "2022-2023 / 2023-2024",
                icon: Building,
                content:
                  "Lors de ma première année de bachelier en automatisation, j'ai eu l'opportunité de participer au salon Indumation, accompagné de mon professeur d'énergétique, Monsieur Delannoy. Indumation est un salon regroupant plus de 240 exposants spécialisés dans l'automatisation industrielle, la fabrication, la logistique, l'aérospatial et l'énergie. Ce salon constitue une véritable vitrine des dernières innovations en matière d'automatisation, de numérisation et d'industrie 4.0.",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                title: "Printemps des Sciences",
                year: "2025",
                icon: Award,
                content: null,
                subSections: [
                  {
                    title: "Lego Mindstorm",
                    content:
                      "J'ai aidé les élèves à comprendre le fonctionnement des capteurs, à assembler des robots, et à écrire leurs premiers programmes afin que les robots puissent réagir à leur environnement.",
                  },
                  {
                    title: "Domotique",
                    content:
                      "J'ai aidé les élèves à comprendre le fonctionnement d'une installation KNX et à écrire leurs premiers programmes sur ETS6.",
                  },
                ],
                gradient: "from-green-500 to-emerald-600",
              },
              {
                title: "Journée Porte Ouverte",
                year: "2025",
                icon: Users,
                content:
                  "En mars 2025, dans le cadre de mon stage, j'ai participé à la Journée Portes Ouvertes organisée par l'EPHEC. Cette expérience m'a permis de représenter l'école aux côtés de mon professeur et de prendre part à l'accueil des visiteurs.",
                gradient: "from-purple-500 to-violet-600",
              },
              {
                title: "Journée Entreprise",
                year: "2025",
                icon: Briefcase,
                content:
                  "La Journée Entreprises-Formations (JEF) est un événement organisé par l'EPHEC, visant à faciliter les échanges entre les étudiants et les entreprises. Cette journée m'a offert l'opportunité de rencontrer directement plusieurs entreprises et d'échanger avec des professionnels du secteur.",
                gradient: "from-orange-500 to-red-600",
              },
              {
                title: "Déménagement de l'école",
                year: "2025",
                icon: Building,
                content:
                  "Les 10, 11 et 12 juin 2025, j'ai participé au déménagement de mon école en aidant à emballer les affaires dans des cartons, à trier les objets et à transporter une partie de ces cartons dans leur nouveau bâtiment.",
                gradient: "from-teal-500 to-cyan-600",
              },
            ].map((item, index) => (
              <Card key={index} className="glass-effect shadow-2xl border-0 card-hover">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className={`bg-gradient-to-r ${item.gradient} p-4 rounded-2xl flex-shrink-0 shadow-xl`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2 lg:mb-0">{item.title}</h3>
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {item.year}
                        </span>
                      </div>

                      {item.content && <p className="text-lg text-slate-700 leading-relaxed">{item.content}</p>}

                      {item.subSections && (
                        <div className="space-y-6 mt-6">
                          {item.subSections.map((sub, subIndex) => (
                            <div key={subIndex} className="bg-white/50 rounded-xl p-6 border border-white/20">
                              <h4 className="text-xl font-semibold text-slate-800 mb-3">{sub.title}</h4>
                              <p className="text-slate-700 leading-relaxed">{sub.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Matteo Debin</h3>
            <p className="text-slate-300 text-lg mb-8">Étudiant en Automatisation • Futur Ingénieur</p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                onClick={() => window.open("mailto:debinmatteo9@gmail.com", "_blank")}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Me contacter par e-mail
              </Button>

              <Button
                onClick={() => window.open("https://www.linkedin.com/in/matteo-debin-26199336b/", "_blank")}
                className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Voir mon profil LinkedIn
              </Button>

              <Button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </Button>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">© 2024 Matteo Debin - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
