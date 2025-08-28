import { InputField } from "../../components/auth-components/InputField"
import { LabelField } from "../../components/auth-components/LabelField"
import { FooterField } from "../../components/auth-components/FooterField"

export const Signup = () => {

  const formFields = [

    {name: "email", title: "Email", type: "email"},
    {name: "user", title: "User Name", type:"text"},
    {name: "password", title: "Password", type: "password"}
  ]

  return (
   <div className="flex flex-col items-center justify-center h-[50vh]">
      <p>Create your account</p>
    <form className="border-1 border-gray-600 p-3 rounded-lg">
     {formFields.map((field)=>{
      return(
        <>
      <LabelField name={field.name} title={field.title} />
      <InputField name={field.name} type={field.type}/>
        </>
      )
     })}
      <FooterField type="signup"  />
    </form>
    </div>
  )
}
