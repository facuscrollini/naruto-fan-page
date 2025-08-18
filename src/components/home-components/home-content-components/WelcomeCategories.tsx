import { WelcomeCategoriesMenu } from "./WelcomeCategoriesMenu"
import { WelcomeCategoriesPreview } from "./WelcomeCategoriesPreview"

export const WelcomeCategories = () => {
  return (
    <>
    <div className=" border border-rose-600 p-5">
    WelcomeCategories
    <WelcomeCategoriesMenu/>
    <WelcomeCategoriesPreview/>
    </div>
    </>
  )
}
