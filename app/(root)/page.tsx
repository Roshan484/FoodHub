import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FeaturedRestaurants from "./_components/featured-resturants";
import Hero from "./_components/hero";
import PopularDishes from "./_components/popular-dishes";
import HowItWorks from "./_components/how-it-works";
import Testimonials from "./_components/testimonials";
import FoodCategories from "./_components/food-categories";

export default function Home() {
	return (
		<MaxWidthWrapper>
			<Hero />
			<FoodCategories />
			<FeaturedRestaurants />
			<PopularDishes />
			<HowItWorks />
			<Testimonials />
		</MaxWidthWrapper>
	);
}
