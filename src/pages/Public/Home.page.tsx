import { HomeBackground } from "../../components/home-components/HomeBackground"
import { HomeContent } from "../../components/home-components/HomeContent"
import { Welcome } from "../../components/home-components/Welcome"

export const Home = () => {
    return (
        <>
            <div className="relative py-3">

                <div className="mx-20 ">
                    <HomeBackground />
                    <Welcome />
                    <HomeContent />
                </div>
            </div>
        </>
    )
}