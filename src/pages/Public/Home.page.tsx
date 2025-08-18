import { HomeBackground } from "../../components/home-components/welcome-message-components/HomeBackground"
import { HomeContent } from "../../components/home-components/HomeContent"
import { Welcome } from "../../components/home-components/Welcome"

export const Home = () => {
    return (
        <>
            <div className="relative py-3">

                <div className="m-100vh ">
                    <HomeBackground />
                    <Welcome />
                    <HomeContent />
                </div>
            </div>
        </>
    )
}