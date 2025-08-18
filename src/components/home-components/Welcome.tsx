import { WelcomeMessage } from "./welcome-message-components/WelcomeMessage"

export const Welcome = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative flex justify-center items-center">
       <WelcomeMessage/>
        <img className="w-full object-cover h-150" src="https://i.ibb.co/211qk9T2/Manga-naruto-personajes-fondo-Nero-AI-Image-Upscaler-Photo-Face.jpg" />
        <div className="absolute inset-0 bg-radial bg-sky-100/90 border-b-2 border-b-gray-500/50">
        </div>
      </div>
    </div>
  )
}