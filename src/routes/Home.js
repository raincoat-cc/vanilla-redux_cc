import { React, useState } from "react";
import { connect } from "react-redux";

const Home = toDos => {
  console.log(toDos);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

function getCurrentState(state) {
  return { toDos: state };
}

export default connect(getCurrentState)(Home);
