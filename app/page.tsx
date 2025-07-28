import Image from "next/image"
import Link from "next/link"
import { Camera, ArrowRight, Sparkles, Heart, Mountain, Users, Building, Leaf } from "lucide-react"

const collections = [
  {
    id: "portraits",
    title: "Portraits",
    subtitle: "Soul Stories",
    description: "Every face tells a story. Let me capture yours.",
    coverImage: "/placeholder.svg?height=500&width=400",
    imageCount: 24,
    color: "from-rose-500 to-pink-600",
    icon: Heart,
    featured: true,
  },
  {
    id: "landscapes",
    title: "Landscapes",
    subtitle: "Earth's Canvas",
    description: "Where nature becomes art and horizons become dreams.",
    coverImage: "/placeholder.svg?height=400&width=600",
    imageCount: 18,
    color: "from-emerald-500 to-teal-600",
    icon: Mountain,
    featured: false,
  },
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Love Letters",
    description: "Two hearts, one story, infinite moments of pure magic.",
    coverImage: "/placeholder.svg?height=500&width=400",
    imageCount: 32,
    color: "from-amber-500 to-orange-600",
    icon: Sparkles,
    featured: true,
  },
  {
    id: "street",
    title: "Street",
    subtitle: "Urban Poetry",
    description: "Life unscripted. Moments unguarded. Stories untold.",
    coverImage: "/placeholder.svg?height=600&width=400",
    imageCount: 15,
    color: "from-slate-500 to-gray-600",
    icon: Users,
    featured: false,
  },
  {
    id: "nature",
    title: "Wildlife",
    subtitle: "Wild Whispers",
    description: "In nature's theater, every creature has a starring role.",
    coverImage: "/placeholder.svg?height=500&width=400",
    imageCount: 21,
    color: "from-green-500 to-emerald-600",
    icon: Leaf,
    featured: false,
  },
  {
    id: "architecture",
    title: "Architecture",
    subtitle: "Built Dreams",
    description: "Where human ambition meets sky and steel sings poetry.",
    coverImage: "/placeholder.svg?height=600&width=400",
    imageCount: 12,
    color: "from-blue-500 to-indigo-600",
    icon: Building,
    featured: false,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      {/* Floating Navigation */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-white/20">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Camera className="h-6 w-6 transition-transform group-hover:rotate-12" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              </div>
              <span className="text-lg font-medium bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Alex Morgan
              </span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-rose-600 transition-colors relative group">
                Work
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full" />
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-rose-600 transition-colors relative group">
                About
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full" />
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-rose-600 transition-colors relative group"
              >
                Contact
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full" />
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-transparent to-blue-100/30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/30">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-slate-700">Available for bookings</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent">
              Capturing
            </span>
            <br />
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent animate-pulse">
              Magic
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Where light meets emotion and moments become memories.
            <br />
            <span className="text-rose-500 font-medium">Let's create something extraordinary together.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#collections"
              className="group bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 flex items-center gap-2"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                My Collections
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each collection tells a different story, captures a different emotion, reveals a different truth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => {
              const IconComponent = collection.icon
              return (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className={`group block relative overflow-hidden rounded-2xl ${
                    collection.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`relative aspect-[4/5] ${collection.featured ? "md:aspect-[8/5] lg:aspect-[4/5]" : ""}`}
                  >
                    <Image
                      src={collection.coverImage || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent className="w-5 h-5" />
                          <span className="text-sm font-medium opacity-90">{collection.subtitle}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                          {collection.title}
                        </h3>
                        <p className="text-sm opacity-90 mb-3 line-clamp-2">{collection.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs opacity-75">{collection.imageCount} images</span>
                          <ArrowRight className="w-4 h-4 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {collection.featured && (
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-medium text-white">Featured</span>
                      </div>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/5 to-orange-500/10" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Ready to Create
            </span>
            <br />
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Something Beautiful?
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Every great photo starts with a conversation. Let's talk about your vision and bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 group"
          >
            Start Your Project
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative">
                <Camera className="h-8 w-8 text-rose-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full animate-ping" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Alex Morgan
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Professional photographer crafting visual stories in San Francisco & beyond
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <Link href="/about" className="text-slate-300 hover:text-rose-400 transition-colors relative group">
                About
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-rose-400 transition-all group-hover:w-full" />
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-rose-400 transition-colors relative group">
                Contact
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-rose-400 transition-all group-hover:w-full" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-rose-400 transition-colors relative group">
                Instagram
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-rose-400 transition-all group-hover:w-full" />
              </Link>
            </div>
          </div>

          <div className="text-center text-slate-500 text-sm border-t border-slate-800 pt-8">
            <p>© 2024 Alex Morgan Photography. Capturing moments, creating memories.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
