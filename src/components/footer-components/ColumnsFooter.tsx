import { Link } from "react-router"
import { useAuth } from "../../hooks/useContext/useAuth"
import { seeCategory } from "../navbar-components/CategoriesButton"
import { listOfCatalogs } from "../navbar-components/CategoriesMenu"

export const ColumnsFooter = () => {

    const {changeCatalog, logged} = useAuth()


  return (
   <>
   <div className="grid grid-cols-3 max-sm:grid-cols-2 text-center mt-5 max-sm:mx-[3vh] sm:mx-[5vh]  md:mx-[6vh] lg:mx-[8vh] xl:mx-[10vh] 2xl:mx-[40vh] rounded-3xl bg-black/50 pl-10 py-4">

                  <div className="text-left">
                     <span className="text-center text-2xl opacity-70 font-bold" >User</span>
                     <ul className="mt-4 grid gap-2 ">
                        <Link to={`${!logged ? "/auth/login" : "/"}`}>
                        <li><button title={`${!logged ? "Log in on your account" : "Please logout to access this"}`} className={`${!logged ? `hover:underline-offset-4 hover:underline hover:cursor-pointer` : "select-none opacity-30" }  `} disabled={logged}>Login</button></li>
                        </Link>
                        <Link to={`${!logged ? "/auth/signup" : "/"}`}>
                        <li><button title={`${!logged ? "Get an account" : "Please logout to access this"}`} className={`${!logged ? `hover:underline-offset-4 hover:underline hover:cursor-pointer` : "select-none opacity-30" }  `} disabled={logged}>Signup</button></li>
                        </Link>
                        <Link to={`${logged ? "/auth/login" : "/"}`}>
                        <li><button title={`${logged ? "Visit your user profile" : "Please login to access this"}`} className={`${logged ? `hover:underline-offset-4 hover:underline hover:cursor-pointer` : "select-none opacity-30" }  `} disabled={!logged}>Profile</button></li>
                        </Link>
                        <Link to={`${logged ? "/auth/dashboard" : "/"}`}>
                        <li><button title={`${logged ? "Visit your user profile" : "Please login to access this"}`} className={`${logged ? `hover:underline-offset-4 hover:underline hover:cursor-pointer` : "select-none opacity-30" }  `} disabled={!logged} >Dashboard</button></li>
                        </Link>
                     </ul>
                  </div>
                  <div className="text-left">
                     <span className="text-2xl opacity-70 font-bold">
                        Categories
                     </span>
                     <ul className="mt-4 grid gap-2" >
                        {listOfCatalogs.map((catalog,index) => {
                           return (
                              < div key={index}>
                              <Link to={`${logged? "/auth/catalog": "/" }`}>
                                 <li><button onClick={()=>seeCategory(changeCatalog, catalog.type)} title={logged ? `See the ${catalog.type} catalog` : `Get in your account to see the ${catalog.type} catalog`} className={` ${logged ?`hover:underline-offset-4 hover:underline hover:cursor-pointer ` : "opacity-30"}`} disabled={!logged}>{catalog.title}</button></li>
                              </Link>
                              </div>
                           )
                        })}
                     </ul>
                  </div>
                  <div className="text-left"><span className="text-2xl opacity-70 font-bold">Contact</span>
                     <ul className="mt-3 grid gap-2">
                        <li title="Send us a message" className="hover:underline-offset-4 hover:underline hover:cursor-pointer">Send us a message</li>
                        <div className="flex gap-2">
                           <li title="Linkedin contact" ><i className="fa-brands fa-linkedin hover:cursor-pointer text-3xl hover:scale-120 transform transition-transform duration-300"></i></li>
                           <li title="Instagram contact"><i className="fa-brands fa-instagram hover:cursor-pointer text-3xl hover:scale-120 transform transition-transform duration-300"></i></li>
                           <li title="Email contact"><i className="fa-solid fa-envelope hover:cursor-pointer text-3xl hover:scale-120 transform transition-transform duration-300"></i></li>
                        </div>
                     </ul>
                  </div>
               </div>
   </>
  )
}
