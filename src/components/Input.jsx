import '../style-sheets/Input.css';

const Input = ({ nameInput, setNameInput, passwordInput, setPasswordInput }) => {
  return (
    <>
      <label className='sub-title'>
        Nombre:
        <input
          type="text"
          placeholder="Escribe aquí"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)} />
      </label>

      <label className='password'>
        Contraseña:
        <input
          type="password"
          placeholder="Escribe aquí"
          inputmode="numeric" maxlength="6"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)} />
      </label>
    </>
  );
};

export default Input;