import { Link } from "react-router"



type Props = {
    type: FormType
}

type FormType = keyof typeof formFields

const formFields = {
    login: {
        mainButton: "Login",
        message1: "You dont't have an account?", message1Url: "/auth/signup", button1: "Signup",
    },
    signup: {
        mainButton: "Signup",
        message1: "You have an account?", message1Url: "/auth/login", button1: "Login",
    }
}
export const FooterField = ({ type }: Props) => {
    
    

    return (
        <div className="flex flex-col items-center justify-end mt-2 ">
            {type === "login" ?
            
            <>
            <p>Forgot your password?</p>
            <Link to="/auth/login">
                <button type="submit" className="text-sky-500 underline underline-offset-3 hover:cursor-pointer" >Recover it</button>
            </Link>
            </>
            :
            <div className="flex">
            <input type="checkbox" required></input>
            <p>Accept the <Link to="/auth/signup"><span className="text-sky-500 underline underline-offset-4 hover:cursor-pointer">terms and conditions</span></Link></p>
            </div>
            }
            <button className="bg-blue-700 rounded-full px-4 py-1 w-fit text-sky-200 hover:cursor-pointer hover:scale-120 transition-all duration-500">{formFields[type].mainButton}</button>
            <p>{formFields[type].message1}</p>
            <Link to={formFields[type].message1Url}>
                <button type="button" className="text-sky-500 underline underline-offset-3 hover:cursor-pointer" >{formFields[type].button1}</button>
            </Link>

        </div>
    )
}
