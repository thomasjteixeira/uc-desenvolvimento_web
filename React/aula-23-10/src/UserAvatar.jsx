function UserAvatar(props) {
  const defaultImageUrl =
    "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg";

  return (
    <div>
      <img
        src={props.imageUrl || defaultImageUrl}
        alt="Avatar do Usuário"
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <p>{props.username}</p>
    </div>
  );
}

export default UserAvatar;

// ---------------
// function App() {
//   const avatar = "https://i.pinimg.com/736x/1e/6a/89/1e6a891e84715f1e10b96ce9b4b789af.jpg";
//   //const avatar = "";
//   return (
//     <div className="App">
//       <UserAvatar imageUrl={avatar} username="Avatar Aang" />
//     </div>
//   );
// }