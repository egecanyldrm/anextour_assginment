const Subitle = ({ subtitle }) => {
    return (
        <div>
            <h1 dangerouslySetInnerHTML={{ __html: subtitle }} className='subtitle'></h1>
        </div>
    )
}

export default Subitle