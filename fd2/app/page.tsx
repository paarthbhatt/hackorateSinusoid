import FeaturedCarousel from "@/components/featured-carousel"
import MenuCategories from "@/components/menu-categories"
import PopularSlider from "@/components/popular-slider"
import ReviewsSlider from "@/components/reviews-slider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollController from "@/components/scroll-controller"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 to-amber-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <section className="relative">
          <FeaturedCarousel />
        </section>

        {/* Menu Categories */}
        <section className="py-12 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Browse By Category
            </h2>
            <MenuCategories />
          </div>
        </section>

        {/* Popular Items Slider */}
        <section className="py-12 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Popular Right Now
            </h2>
            <PopularSlider />
          </div>
        </section>

        {/* Reviews Slider */}
        <section className="py-12 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <ReviewsSlider />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollController />
    </div>
  )
}
