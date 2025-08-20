import { WelcomeCategoriesMenu } from "./WelcomeCategoriesMenu"
import { WelcomeCategoriesPreview } from "./WelcomeCategoriesPreview"

export const WelcomeCategories = () => {
  return (
    <>
      <div className=" p-5">
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-x-3 gap-y-4">
          <div className="min-h-20 rounded-lg">
            <WelcomeCategoriesMenu/>
          </div>
          <div className="bg-blue-700rounded-lg col-span-2">
            <WelcomeCategoriesPreview/>
          </div>
        </div>
      </div>
    </>
  )
}
