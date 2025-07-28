import Image from "next/image"
import Link from "next/link"
import { Camera, ArrowLeft, Heart, Award, Users, MapPin, Coffee, Sparkles } from "lucide-react"

const stats = [
  { icon: Heart, label: "Happy Clients", value: "500+" },
  { icon: Award, label: "Awards Won", value: "25" },
  { icon: Users, label: "Weddings Shot", value: "150+" },
  { icon: MapPin, label: "Countries Visited", value: "12" },
]

const journey = [
  {
    year: "2015",
    title: "The Beginning",
    description: "Picked up my first camera and fell in love with capturing moments.",
  },
  {
    year: "2017",
    title: "Going Professional",
    description: "Left my corporate job to pursue photography full-time. Best decision ever.",
  },
  {
    year: "2019",
    title: "International Recognition",
    description: "Won my first international photography award for portrait work.",
  },
  {
    year: "2021",
    title: "Studio Launch",
    description: "Opened my dream studio in the heart of San Francisco.",
  },
  {
    year: "2024",
    title: "New Horizons",
    description: "Expanding into fine art photography and gallery exhibitions.",
  },
]

export default function AboutPage() {
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
              <Link href="/about" className="text-sm font-medium text-rose-600 relative">
                About
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-500" />
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
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-transparent to-blue-100/30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors mb-8 group bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Collections
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
                <Coffee className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-medium text-slate-700">Coffee enthusiast & storyteller</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Hey, I'm
                </span>
                <br />
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Alex</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                A passionate photographer who believes that every moment has a story worth telling. I don't just take
                pictures—I capture emotions, freeze time, and create memories that last forever.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center group">
                      <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Alex Morgan - Photographer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                <Sparkles className="w-6 h-6 text-rose-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                <Camera className="w-6 h-6 text-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>

            <div className="space-y-12">
              {journey.map((milestone, index) => (
                <div key={index} className="flex gap-8 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-rose-600 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-pink-500/5 to-orange-500/5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                My Philosophy
              </span>
            </h2>

            <div className="text-xl md:text-2xl text-slate-600 leading-relaxed space-y-6">
              <p>
                "Photography is not about the camera—it's about the connection. It's about finding that split second
                where everything aligns: the light, the emotion, the story."
              </p>
              <p>
                I believe in authentic moments over posed perfection. In laughter lines over filtered faces. In the
                beauty of imperfection and the power of genuine emotion.
              </p>
              <p className="text-rose-600 font-medium">
                Every click of my shutter is a promise to preserve not just how you looked, but how you felt in that
                moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Let's Create
            </span>
            <br />
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Magic Together
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Ready to tell your story? I'm here to listen, laugh, and capture every beautiful moment along the way.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 group"
          >
            Get In Touch
            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
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
