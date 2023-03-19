//Jumbotron component
// Uses bootstrap jumbotron class

function Jumbotron() {
    return (
        <div className="jumbotron">
  <div className="container text-center">
    <h1>Randy Duong</h1>
    <div className="intro-text">
      <p>3rd year back-end software developer</p>
      <p>sample text</p>
      <p>sample text</p>
    </div>
    <form id="mainbutton" onsubmit="redirectToProjects(event)">
      <input type="submit" defaultValue="Check out my projects" />
    </form>
  </div>
</div>
    )
}