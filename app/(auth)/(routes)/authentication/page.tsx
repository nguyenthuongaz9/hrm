import getCurrentUser from "@/app/actions/users/getCurrentUser"
import AuthForm from "@/components/form/AuthForm"




const AuthPage = async () => {

  const currentUser = await getCurrentUser()



  return (
    <AuthForm
      currentUser={currentUser}
    />

  )
}

export default AuthPage