export default function Error({ statusCode }) {
  return statusCode === 404 ? <NotFound /> : <Error500 />;
} 