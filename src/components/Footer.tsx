import { Link } from "react-router"
import { listOfCatalogs } from "./navbar-components/CategoriesMenu"
import { seeCategory } from "./navbar-components/CategoriesButton"
import { useAuth } from "../hooks/useContext/useAuth"



export const Footer = () => {

const {changeCatalog, logged} = useAuth()

   return (
      <>
         <div className="min-h-100 flex flex-col relative">
            <div className="flex-1 z-1 text-white">
               <div className="grid grid-cols-3 text-center mt-5 mx-50 rounded-3xl bg-black/50 pl-10 py-4">

                  <div className="text-left">
                     <span className="text-2xl opacity-70 font-bold" >User</span>
                     <ul className="mt-4 grid gap-2 ">
                        <Link to="/auth/login">
                        <li><button title={`${!logged ? "Log in on your account" : "Please logout to access this"}`} className={`${!logged ? `hover:underline-offset-4 hover:underline hover:cursor-pointer` : "select-none opacity-50" }  `} disabled={logged}>Login</button></li>
                        </Link>
                        <Link to="/auth/signup">
                        <li><button title={`${!logged ? "Get an account" : "Please logout to access this"}`} className={`${!logged ? `hover:underline-offset-4 hover:underline hover:cursor-pointer` : "select-none opacity-50" }  `} disabled={logged}>Signup</button></li>
                        </Link>
                        <Link to="/admin/profile">
                        <li><button title={`${logged ? "Visit your user profile" : "Please login to access this"}`} className={`${logged ? `hover:underline-offset-4 hover:underline hover:cursor-pointer` : "select-none opacity-50" }  `} disabled={!logged}>Profile</button></li>
                        </Link>
                        <Link to="/admin/dashboard">
                        <li><button title={`${logged ? "Visit your user profile" : "Please login to access this"}`} className={`${logged ? `hover:underline-offset-4 hover:underline hover:cursor-pointer` : "select-none opacity-50" }  `} disabled={!logged} >Dashboard</button></li>
                        </Link>
                     </ul>
                  </div>
                  <div className="text-left">
                     <span className="text-2xl opacity-70 font-bold">
                        Categories
                     </span>
                     <ul className="mt-4 grid gap-2" >
                        {listOfCatalogs.map((catalog) => {
                           return (
                              <>
                              <Link to={`/auth/catalog`}>
                                 <li><button onClick={()=>seeCategory(changeCatalog, catalog.type)} title={logged ? `See the ${catalog.type} catalog` : `Get in your account to see the ${catalog.type} catalog`} className={` ${logged ?`hover:underline-offset-4 hover:underline hover:cursor-pointer ` : "opacity-50"}`} disabled={!logged}>{catalog.title}</button></li>
                              </Link>
                              </>
                           )
                        })}
                     </ul>
                  </div>
                  <div className="text-left"><span className="text-2xl opacity-70 font-bold">Contact</span>
                     <ul className="mt-3 grid gap-2">
                        <li title="Send us a message" className="hover:underline-offset-4 hover:underline hover:cursor-pointer">Send us a message</li>
                        <div className="flex gap-2">
                           <li title="Linkedin contact" ><i className="fa-brands fa-linkedin hover:cursor-pointer text-3xl hover:scale-120"></i></li>
                           <li title="Instagram contact"><i className="fa-brands fa-instagram hover:cursor-pointer text-3xl hover:scale-120"></i></li>
                           <li title="Email contact"><i className="fa-solid fa-envelope hover:cursor-pointer text-3xl hover:scale-120"></i></li>
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