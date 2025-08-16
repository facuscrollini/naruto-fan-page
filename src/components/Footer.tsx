import { listOfCatalogs } from "./navbar-components/CategoriesMenu"



export const Footer = () => {


   return (
      <>
         <div className="min-h-100 flex flex-col relative">
            <div className="flex-1 z-1 text-white">
               <div className="grid grid-cols-3 text-center mt-5 mx-50 rounded-3xl bg-black/50 p-3">

                  <div className="text-left">
                     <span className="text-2xl">User</span>
                     <ul className="mt-3">
                        <li>Login</li>
                        <li>Signup</li>
                     </ul>
                     </div>
                  <div className="text-left">
                     <span className="text-2xl">
                     Categories
                     </span>
                     <ul className="mt-3">
                        {listOfCatalogs.map((catalog)=>{
                           return(
                              <>
                              <li>{catalog.title}</li>
                              </>
                           )
                        })}
                     </ul>
                  </div>
                  <div className="text-left"><span className="text-2xl">Contact</span>
                     <ul className="mt-3">
                        <li>Send us a message</li>
                        <div className="flex">

                        <li><i className="fa-brands fa-linkedin"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-solid fa-envelope"></i></li>
                        </div>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="absolute inset-0 ">
               <img className="h-full w-full object-cover filter  brightness-20" src="https://wallpapers.com/images/hd/naruto-manga-e86faunm0r96om1e.jpg"></img>
            </div>
         </div>
      </>
   )
}