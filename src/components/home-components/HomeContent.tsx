import { HomeSearcher } from "./home-content-components/HomeSearcher"
import { WelcomeCategories } from "./home-content-components/WelcomeCategories"

export const HomeContent = () => {
  return (
    <div className=" mt-3 p-3">
    <HomeSearcher/>
    <WelcomeCategories/>
    </div>
  )
}
