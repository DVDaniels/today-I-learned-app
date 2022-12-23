import "./main.css";
<script src="http://localhost:8097"></script>;

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Today I Learned Logo" />
          <h1>Today I learned...</h1>
        </div>
        <button className="btn btn-large btn-open">Share a Fact</button>
      </header>
      <NewFactForm />

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

function CategoryFilter() {
  return <aside>Category Filter</aside>;
}

function FactList() {
  return <section>Facts List</section>;
}

export default App;