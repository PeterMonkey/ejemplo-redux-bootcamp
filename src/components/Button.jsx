

export default function Button({bg, text, click}) {
    return (
        <div className="button" >
            <button style={{background: bg}} onClick={click}>
                {text}
            </button>
        </div>
    )
}