import { InputField } from "../../components/auth-components/InputField"
import { LabelField } from "../../components/auth-components/LabelField"

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


      <div className="flex flex-col items-center justify-end mt-2 ">
      <button className="bg-blue-700 rounded-full px-4 py-1 w-fit text-sky-200 hover:cursor-pointer hover:scale-120 transition-all duration-500">Login</button>
    <p>You don't have an acocunt?</p>
    <p>Forgot your password?</p>
      </div>
    </form>
    </div>
  )
}
