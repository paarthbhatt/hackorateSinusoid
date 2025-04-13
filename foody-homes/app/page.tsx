import FeaturedCarousel from "@/components/featured-carousel"
import SearchBar from "@/components/search-bar"
import MenuCategories from "@/components/menu-categories"
import PopularItems from "@/components/popular-items"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <section className="relative">
          <FeaturedCarousel />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-6 bg-black/30 text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              Delicious Food <br /> Delivered To Your Door
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-2xl">
              Order your favorite meals from the best restaurants in your area
            </p>
            <div className="w-full max-w-2xl px-4">
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Browse By Category</h2>
            <MenuCategories />
          </div>
        </section>

        {/* Popular Items */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Right Now</h2>
            <PopularItems />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
