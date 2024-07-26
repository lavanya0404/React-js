import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <div>
      <img src="https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_1280.jpg" className="error-img"></img>
      </div>
      <div>
      <h1>Oops!</h1>
      <h2>Something went wrong</h2>
      <h3>{error.data}</h3>
      <h3>{error.status}</h3>
      </div>
    </div>
  )
}

export default ErrorElement;