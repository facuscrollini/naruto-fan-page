import { HomeSearcher } from "./HomeSearcher"
import { WelcomeCategories } from "./WelcomeCategories"

export const HomeContent = () => {
  return (
    <div className="bg-violet-200 mt-3 p-3">
    <HomeSearcher/>
    <WelcomeCategories/>
    </div>
  )
}
