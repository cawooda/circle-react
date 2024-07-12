import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Error Happened</h1>
      <p>Sorry, something happened with the routing</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
