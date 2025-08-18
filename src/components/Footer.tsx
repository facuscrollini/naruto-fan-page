import { ColumnsFooter } from "./footer-components/ColumnsFooter"
import { FooterBackground } from "./footer-components/FooterBackground"
import { FooterCopyRight } from "./footer-components/FooterCopyRight"



export const Footer = () => {


   return (
      <>
         <div className="flex flex-col relative">
            <div className="flex-1 z-1 text-white">
               <ColumnsFooter />
            </div>
            <FooterBackground />
            <FooterCopyRight/>
         </div>
      </>
   )
}