import { useRouteError } from "react-router-dom"
const ErrorPage =()=>{
    const err = useRouteError();
    console.log(err)
    return(
      <div>
        <h2>this is Custom Error Page</h2>
        <h3>{err.status}</h3>
      </div>
    )
}
export default ErrorPage