function Navbar({ userinfoProps }) {
  return (
    <nav>
      <img src={userinfoProps.image} alt="" />
      <p> {userinfoProps.username} </p>
      <ul>
        <li> Menu </li>
      </ul>
    </nav>
  );
}

export default Navbar;
