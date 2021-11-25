import Head from 'next/head'
import {Container} from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'


export default function Programming() {
  return (
    <>
      <Head>
        <title>Animefest 2022</title>
        <meta name="description" content="February 12 at UC San Diego's Price Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="p-5 text-center landing">
        <h1 className="display-4">Programming</h1>
      </Container>

      <Container fluid className="p-5 mt-4 section" id="main">
        <h1 className="text-left mb-4">Main Stage</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="exhibitor">
        <h1 className="text-left mb-4">Exhibitor Hall</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="panels">
        <h1 className="text-left mb-4">Panels</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="cosplay">
        <h1 className="text-left mb-4">Cosplay Masquerade</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="gaming">
        <h1 className="text-left mb-4">Gaming</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="showings">
        <h1 className="text-left mb-4">Showings</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="manga">
        <h1 className="text-left mb-4">Manga Library</h1>
        Coming Soon!
      </Container>
    </>
  )
}
