
import React from 'react'
import { useAppSelector } from '../Redux/hooks'

type Props = {}
const auth = useAppSelector((state=>state.auth))
console.log(auth)
const AdminGuard = ({children}:{children:React.ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default AdminGuard
