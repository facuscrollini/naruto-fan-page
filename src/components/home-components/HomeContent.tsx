import { HomeSearcher } from "./home-content-components/HomeSearcher"
import { WelcomeCategories } from "./home-content-components/WelcomeCategories"
import { HomeBackground } from "./welcome-message-components/HomeBackground"

export const HomeContent = () => {
  return (
    <div className="relative pt-3 h-fit">
      <HomeBackground />
      <div className="relative flex justify-center w-full lg:w-[50vh] md:w-[60vh]">
        <HomeSearcher />
        <WelcomeCategories />
      </div>
    </div>
  )
}
