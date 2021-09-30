// import react from "react";
export default function Player(props) {
  //   const [name, age] = props;

  const onClickincreament = () => {
    props.increamentScore(props.id);
  };

  return (
    <li className="Player">
      <div>
        ID: {props.id}
        {props.name} (score: {props.score})<button onClick={onClickincreament}> increament</button>
      </div>
    </li>
  );
}
