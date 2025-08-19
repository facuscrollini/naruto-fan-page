import { WelcomeCategoriesMenu } from "./WelcomeCategoriesMenu"
import { WelcomeCategoriesPreview } from "./WelcomeCategoriesPreview"

export const WelcomeCategories = () => {
  return (
    <>
      <div className=" border border-rose-600 p-5">
        <div className="grid sm:grid-cols-1 grid-cols-3 gap-x-3 gap-y-4">
          <div className="bg-red-700 min-h-20 rounded-lg">
            <WelcomeCategoriesMenu/>

          </div>
          <div className="bg-blue-700 min-h-20 rounded-lg col-span-2">
            <WelcomeCategoriesPreview/>

          </div>
          
        </div>
      </div>
    </>
  )
}
