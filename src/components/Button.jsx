

export default function Button({bg, text}) {
    return (
        <div className="button" >
            <button style={{background: bg}}>
                {text}
            </button>
        </div>
    )
}