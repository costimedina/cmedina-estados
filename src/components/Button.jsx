import '../style-sheets/Button.css';

const Button = ({ clickButton }) => {
return (
<button type='submit' disabled = {!clickButton}>Haz click aquí</button>
)
};

export default Button;
