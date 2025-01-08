import { Link } from "@tanstack/react-router"

export function NotFound() {
  return (
    <main>
      <h2>The page you are looking for does not exist.</h2>

      <p>
        <button onClick={() => window.history.back()}>Go back</button>

        <Link to="/">Start Over</Link>
      </p>
    </main>
  )
}
