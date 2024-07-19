import './Button.css';

function Button({ onClick, content, active }) {
    return (
        <div className={active ? 'filter-active' : 'filter'}>
            <button onClick={onClick}>{content}</button>
        </div>
    )
}

export default Button;