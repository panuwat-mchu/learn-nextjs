import Head from 'next/head'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Hero title
        </h1>
          <h2 className="subtitle">
            Hero subtitle
        </h2>
        </div>
      </div>
      <div className="tabs">
        <ul>
          <li className="is-active"><a>Pictures</a></li>
          <li><a>Music</a></li>
          <li><a>Videos</a></li>
          <li><a>Documents</a></li>
        </ul>
      </div>
      <div>
      <span className="tag is-primary is-light">Primary</span>
      <span className="tag is-link is-light">Link</span>
      <span className="tag is-info is-light">Info</span>
      <span className="tag is-success is-light">Success</span>
      <span className="tag is-warning is-light">Warning</span>
      <span className="tag is-danger is-light">Danger</span>
      </div>
    </section>
  )
}
