import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top section with logo and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-white/20">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="relative w-16 h-16 mr-4">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Foody Homes Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                <span className="text-white">Foody</span>
                <span className="text-amber-200">Homes</span>
              </h2>
              <p className="text-amber-100">Delicious food delivered to your door</p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Subscribe to our newsletter</h3>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-r-none focus-visible:ring-amber-300"
              />
              <Button className="bg-white text-orange-600 hover:bg-amber-200 rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5" /> Our Locations
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-amber-200" />
                <span>123 Food Street, Cuisine City, FC 12345</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-amber-200" />
                <span>456 Flavor Avenue, Taste Town, TT 67890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-amber-200" />
                <span>789 Delicious Drive, Foodie Village, FV 54321</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5" /> Opening Hours
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">9:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between mt-4 pt-4 border-t border-white/20">
                <span>Delivery Hours</span>
                <span className="font-medium">10:00 AM - 9:30 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="#" className="hover:text-amber-200 hover:underline">
                Home
              </Link>
              <Link href="#" className="hover:text-amber-200 hover:underline">
                Menu
              </Link>
              <Link href="#" className="hover:text-amber-200 hover:underline">
                Restaurants
              </Link>
              <Link href="#" className="hover:text-amber-200 hover:underline">
                Offers
              </Link>
              <Link href="#" className="hover:text-amber-200 hover:underline">
                About Us
              </Link>
              <Link href="#" className="hover:text-amber-200 hover:underline">
                Contact
              </Link>
              <Link href="#" className="hover:text-amber-200 hover:underline">
                FAQ
              </Link>
              <Link href="#" className="hover:text-amber-200 hover:underline">
                Blog
              </Link>
              <Link href="#" className="hover:text-amber-200 hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-amber-200 hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-amber-200" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-amber-200" />
                <span>info@foodyhomes.com</span>
              </li>
              <li className="mt-6">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-amber-100">© {new Date().getFullYear()} Foody Homes. All rights reserved.</p>
          <p className="text-sm text-amber-100/70 mt-2">Made with ❤️ for food lovers everywhere</p>
        </div>
      </div>
    </footer>
  )
}
