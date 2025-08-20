import { HomeContent } from "../../components/home-components/HomeContent"
import { Welcome } from "../../components/home-components/Welcome"

export const Home = () => {
    return (
        <>
            <div className="relative">
                    <Welcome />
                    <HomeContent />
            </div>
        </>
    )
}