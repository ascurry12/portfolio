import './Button.css';

function Button({ onClick, content }) {
    return (
        <div className='filter'>
            <button onClick={onClick}>{content}</button>
        </div>
    )
}

export default Button;