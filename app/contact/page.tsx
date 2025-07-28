import Link from "next/link"
import { Camera, ArrowLeft, Mail, Phone, MapPin, Clock, Heart, Send, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@alexmorgan.photo",
    description: "For all inquiries and bookings",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    description: "Call or text anytime",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@alexmorgan.photo",
    description: "Follow my daily adventures",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "San Francisco, CA",
    description: "Available for travel worldwide",
    color: "from-purple-500 to-purple-600",
  },
]

const services = [
  { name: "Wedding Photography", price: "Starting at $3,500", popular: true },
  { name: "Portrait Sessions", price: "Starting at $450", popular: false },
  { name: "Event Photography", price: "Starting at $1,200", popular: false },
  { name: "Commercial Work", price: "Custom pricing", popular: false },
  { name: "Fine Art Prints", price: "Starting at $150", popular: true },
]

export default function ContactPage() {
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
              <Link href="/contact" className="text-sm font-medium text-rose-600 relative">
                Contact
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-500" />
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-transparent to-blue-100/30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto text-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors mb-8 group bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Collections
          </Link>

          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/30">
            <MessageCircle className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-slate-700">Usually responds within 2 hours</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Let's Create
            </span>
            <br />
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Together</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Every great photo starts with a great conversation. Tell me your story, share your vision, and let's bring
            your dreams to life through the lens.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-1">{method.label}</h3>
                    <p className="font-medium text-slate-700 mb-2">{method.value}</p>
                    <p className="text-sm text-slate-600">{method.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Tell Me Your Story
                  </CardTitle>
                  <p className="text-slate-600">
                    The more details you share, the better I can understand your vision and provide you with a
                    personalized quote.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="John" className="border-slate-200 focus:border-rose-500" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Doe" className="border-slate-200 focus:border-rose-500" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-slate-200 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="border-slate-200 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      What type of session are you interested in? *
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="portrait">Portrait Session</option>
                      <option value="event">Event Photography</option>
                      <option value="commercial">Commercial Work</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Date
                    </label>
                    <Input id="date" type="date" className="border-slate-200 focus:border-rose-500" />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-plus">$5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Tell me about your vision *
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Share your story, vision, location ideas, special moments you want captured, or any questions you have. The more details, the better I can help bring your vision to life!"
                      className="border-slate-200 focus:border-rose-500"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-3 rounded-full font-medium group">
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Services & Pricing */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500" />
                    Services & Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-slate-800">{service.name}</span>
                            {service.popular && (
                              <span className="bg-rose-100 text-rose-600 text-xs px-2 py-1 rounded-full">Popular</span>
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-slate-600">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <strong>Quick Response:</strong> I typically respond to inquiries within 2-4 hours during
                        business days.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <strong>Consultation Call:</strong> After initial contact, we'll schedule a call to discuss your
                        vision in detail.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <strong>Custom Proposal:</strong> You'll receive a personalized proposal within 24-48 hours.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <strong>Booking Process:</strong> Once approved, we'll handle contracts and scheduling
                        seamlessly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fun Fact */}
              <Card className="border-0 bg-gradient-to-br from-rose-50 to-pink-50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">Fun Fact!</h3>
                  <p className="text-sm text-slate-600">
                    I've traveled over 50,000 miles capturing love stories and have probably consumed enough coffee to
                    fill a small lake ☕
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
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
