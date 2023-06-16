import Button from "./Button";
import { useDispatch } from 'react-redux'
import { changePanel } from "../state/slice/panelSlice";


export default function ListButtons() {

    const dispatch = useDispatch()

    const click = (bg) => {
        dispatch(changePanel(bg))
    }

    return (
        <div className="list-buttons">
            <div>
                <Button bg={'#471b44'} text={'Morado'} click={() => click('#471b44')}/>
                <Button bg={'#149f1b'} text={'Verde'} click={() => click('#149f1b')}/>
                <Button bg={'#171ea9'} text={'Azul'} click={() => click('#171ea9')}/>
            </div>
        </div>
    )
}