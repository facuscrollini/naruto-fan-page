import { WelcomeMessage } from "./welcome-message-components/WelcomeMessage"

export const Welcome = () => {
  return (
    <div className="rounded-2xl border-rose-900 overflow-hidden border-r-4 border-l-4 border-t-8 border-b-6">
      <div className="relative flex justify-center items-center">
       <WelcomeMessage/>
        <img className="w-full object-cover h-150" src="https://i.ibb.co/211qk9T2/Manga-naruto-personajes-fondo-Nero-AI-Image-Upscaler-Photo-Face.jpg" />
        <div className="absolute inset-0 bg-radial from-amber-900/50  to-amber-600 ">
        </div>
      </div>
    </div>
  )
}