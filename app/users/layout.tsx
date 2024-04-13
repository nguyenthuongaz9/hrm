


interface UserLayoutProps{
    children: React.ReactNode
}

const UserLayout = ({
    children
}: UserLayoutProps) => {
  return (
    <div className="w-full h-full">
        {children}
    </div>
  )
}

export default UserLayout