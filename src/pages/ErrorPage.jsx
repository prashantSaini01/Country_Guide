import { useRouteError , NavLink} from "react-router-dom"


export const ErrorPage = () => {

    const error = useRouteError()
    return (
        <div>
            <h1>Oops! An error occurred.</h1>
            {error && <p>{error.message}</p>}
            <NavLink to="/">
            <button>Go back to home</button>
            </NavLink>
        </div>
    )

}