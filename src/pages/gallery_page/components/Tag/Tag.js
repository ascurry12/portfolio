import './Tag.css';

function Tag({ content, type }) {
    return (
        <div className='tag'>
            <p className={type}>{content}</p>
        </div>
    )
}

export default Tag;