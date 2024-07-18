import './Button.css';

function Button({ onClick, content, style }) {
    return (
        <div className='filter'>
            <button onClick={onClick}>{content}</button>
        </div>
    )
}

export default Button;