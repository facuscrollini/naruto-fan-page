import { HomeSearcher } from "./home-content-components/HomeSearcher"
import { WelcomeCategories } from "./home-content-components/WelcomeCategories"
import { HomeBackground } from "./welcome-message-components/HomeBackground"

export const HomeContent = () => {
  return (
    <div className="relative pt-3 h-fit">
      <HomeBackground />
      <div className="relative mx-auto w-full sm:w-[600px] md:w-[768px] lg:w-[800px] 2xl:w-[1024px] pb-[5vh]">
        <HomeSearcher />
        <WelcomeCategories />
      </div>
    </div>
  )
}
