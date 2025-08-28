import { Link } from "react-router"
import { InputField } from "../../components/auth-components/InputField"
import { LabelField } from "../../components/auth-components/LabelField"
import { FooterField } from "../../components/auth-components/FooterField"

export const Login = () => {

  const formFields = [
    {name: "user", title: "User", type:"text"},
    {name: "password", title: "Password", type: "password"},
  ]


  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <p>Login</p>
    <form className="border-1 border-gray-600 p-3 rounded-lg">
     {formFields.map((field)=>{
      return(
        <>
      <LabelField name={field.name} title={field.title} />
      <InputField name={field.name} type={field.type}/>
        </>
      )

     })}


      <FooterField type="login"/>
    </form>
    </div>
  )
}
