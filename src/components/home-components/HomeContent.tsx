import { HomeSearcher } from "./home-content-components/HomeSearcher"
import { WelcomeCategories } from "./home-content-components/WelcomeCategories"
import { HomeBackground } from "./welcome-message-components/HomeBackground"

export const HomeContent = () => {
  return (
    <div className="relative pt-3 h-fit  lg:px-[10vh] 2xl:px-[30vh]">
      <HomeBackground />
      <div className="h-fu bg-blue-600">
      </div>
      <div className="relative">
        <HomeSearcher />
        <WelcomeCategories />
      </div>
    </div>
  )
}
