import { useSelector } from 'react-redux'

export default function Panel() {

    const color = useSelector(state => state.panel)
    const {bg} =color

    console.log(bg)

    return (
        <>
            <div style={{background: bg, width: '170px', height: '290px'}}></div>
        </>
    )
}