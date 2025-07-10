import "./main.css";

function Main({ nothing }) {
  return (
    <main className="main">
      <p className="main__text">Hello!</p>
      <button className="main__button" type="button" onClick={nothing}>
        Click here for nothing.
      </button>
    </main>
  );
}

export default Main;
