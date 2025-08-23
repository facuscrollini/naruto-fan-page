import { HomeSearcher } from "./home-content-components/HomeSearcher"
import { WelcomeCategories } from "./home-content-components/WelcomeCategories"
import { HomeBackground } from "./welcome-message-components/HomeBackground"

export const HomeContent = () => {
  return (
    <div className="relative pt-3 h-fit">
      <HomeBackground />
      <div className="relative mx-auto w-full sm:w-[540px] md:w-[768px] lg:w-[960px] xl:w-[1140px]">
        <HomeSearcher />
        <WelcomeCategories />
      </div>
    </div>
  )
}
