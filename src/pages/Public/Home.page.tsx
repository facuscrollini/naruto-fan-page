import { HomeBackground } from "../../components/home-components/welcome-message-components/HomeBackground"
import { HomeContent } from "../../components/home-components/HomeContent"
import { Welcome } from "../../components/home-components/Welcome"

export const Home = () => {
    return (
        <>
            <div className="relative">
                    <HomeBackground />
                    <Welcome />
                    <HomeContent />
            </div>
        </>
    )
}