import { useSelector } from "react-redux";

function DisplayInfo() {
  const user = useSelector((state) => {
    return state.user;
  });

  return (
    <article>
      <h3>Användarnamn: {user.username}</h3>
      <h3>Email: {user.email}</h3>
    </article>
  );
}

export default DisplayInfo;
