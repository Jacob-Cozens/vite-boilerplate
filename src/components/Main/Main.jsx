import "./main.css";

function Main({ nothing }) {
  return (
    <main className="main">
      <p className="main__text">Hello!</p>
      <button className="main__button" type="button" onClick={nothing}>
        Click here for nothing.
      </button>
      <p className="password__text">Enter Password</p>
      <input type="text" className="password__input" placeholder="it's password"></input>
    </main>
  );
}

export default Main;
