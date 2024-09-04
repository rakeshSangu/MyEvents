import './index.css'

const NotFound = props => {
  const goHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="not-found-container">
      <img
        alt="not-found"
        className="not-found-image"
        src="https://png.pngtree.com/png-vector/20210827/ourmid/pngtree-error-404-page-not-found-png-image_3832696.jpg"
      />
      <p className="not-found-para">Page Not Found</p>
      <button onClick={goHome} className="go-home-button">
        Go Home
      </button>
    </div>
  )
}
export default NotFound
