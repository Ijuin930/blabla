import Image from "next/image"
import Link from "next/link"
import { Camera, ArrowLeft, Heart, Mountain, Sparkles, Users, Building, Leaf, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const collectionsData = {
  portraits: {
    title: "Portraits",
    subtitle: "Soul Stories",
    description:
      "Every face tells a story. Every expression holds a universe. In the quiet moments between words, I find the essence of who you are. These aren't just photographs—they're windows into souls, celebrations of individuality, and love letters to the human spirit.",
    hero: "Capturing the essence of humanity, one soul at a time.",
    color: "from-rose-500 to-pink-600",
    icon: Heart,
    images: Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=${600 + (i % 3) * 100}&width=${400 + (i % 2) * 100}&query=artistic portrait photography person ${i + 1} dramatic lighting`,
      alt: `Portrait ${i + 1}`,
      featured: i % 7 === 0,
    })),
  },
  landscapes: {
    title: "Landscapes",
    subtitle: "Earth's Canvas",
    description:
      "Nature is the greatest artist, and I'm simply her humble translator. From golden hour magic to storm-swept drama, these landscapes capture the raw beauty and untamed spirit of our world. Each image is a love letter to the places that take our breath away.",
    hero: "Where earth meets sky and dreams take flight.",
    color: "from-emerald-500 to-teal-600",
    icon: Mountain,
    images: Array.from({ length: 18 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=${400 + (i % 4) * 50}&width=${600 + (i % 3) * 100}&query=epic landscape photography nature ${i + 1} golden hour mountains`,
      alt: `Landscape ${i + 1}`,
      featured: i % 6 === 0,
    })),
  },
  weddings: {
    title: "Weddings",
    subtitle: "Love Letters",
    description:
      "Love is the most beautiful story ever told, and weddings are where that story becomes legend. I don't just document your day—I capture the laughter that echoes through generations, the tears that speak of joy, and the moments that make hearts skip beats.",
    hero: "Two hearts, one story, infinite moments of pure magic.",
    color: "from-amber-500 to-orange-600",
    icon: Sparkles,
    images: Array.from({ length: 32 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=${600 + (i % 3) * 100}&width=${400 + (i % 2) * 100}&query=romantic wedding photography couple ${i + 1} celebration love`,
      alt: `Wedding ${i + 1}`,
      featured: i % 8 === 0,
    })),
  },
  street: {
    title: "Street Photography",
    subtitle: "Urban Poetry",
    description:
      "The streets are alive with stories waiting to be told. In the rush of city life, I find poetry in motion, beauty in chaos, and humanity in its most authentic form. These are the unguarded moments that reveal the soul of urban life.",
    hero: "Life unscripted. Moments unguarded. Stories untold.",
    color: "from-slate-500 to-gray-600",
    icon: Users,
    images: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=${600 + (i % 3) * 100}&width=${400 + (i % 2) * 100}&query=street photography urban life candid moments ${i + 1}`,
      alt: `Street Photo ${i + 1}`,
      featured: i % 5 === 0,
    })),
  },
  nature: {
    title: "Nature & Wildlife",
    subtitle: "Wild Whispers",
    description:
      "In nature's theater, every creature has a starring role. These images celebrate the wild world in all its untamed glory—from the gentle grace of a deer at dawn to the fierce majesty of predators in their prime. Nature speaks; I simply listen and translate.",
    hero: "Where wild hearts roam free and nature reigns supreme.",
    color: "from-green-500 to-emerald-600",
    icon: Leaf,
    images: Array.from({ length: 21 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=${600 + (i % 3) * 100}&width=${400 + (i % 2) * 100}&query=wildlife photography animals nature ${i + 1} natural habitat`,
      alt: `Wildlife ${i + 1}`,
      featured: i % 7 === 0,
    })),
  },
  architecture: {
    title: "Architecture",
    subtitle: "Built Dreams",
    description:
      "Architecture is humanity's boldest statement—our dreams made manifest in steel, glass, and stone. These images explore the poetry of space, the rhythm of lines, and the way light dances with human ambition to create something greater than the sum of its parts.",
    hero: "Where human ambition meets sky and steel sings poetry.",
    color: "from-blue-500 to-indigo-600",
    icon: Building,
    images: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=${600 + (i % 3) * 100}&width=${400 + (i % 2) * 100}&query=architectural photography modern buildings geometric ${i + 1}`,
      alt: `Architecture ${i + 1}`,
      featured: i % 4 === 0,
    })),
  },
}

interface CollectionPageProps {
  params: {
    id: string
  }
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const collection = collectionsData[params.id as keyof typeof collectionsData]

  if (!collection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Collection not found
          </h1>
          <Link href="/">
            <Button variant="outline" className="group bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Collections
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = collection.icon

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

      {/* Collection Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-5`} />
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors mb-8 group bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Collections
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-r ${collection.color} text-white`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium text-slate-600">{collection.subtitle}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {collection.title}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">{collection.hero}</p>

            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">{collection.description}</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {collection.images.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden bg-gray-100 rounded-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-5 h-5 text-slate-700" />
                    </div>
                  </div>

                  {/* Featured badge */}
                  {image.featured && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-slate-700">Featured</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${collection.color} opacity-5`} />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Love what you see?
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Let's create something beautiful together. Every great photo starts with a conversation.
          </p>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${collection.color} text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 group`}
          >
            Start Your Project
            <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
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
