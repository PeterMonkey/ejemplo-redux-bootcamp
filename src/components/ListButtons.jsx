import Button from "./Button";


export default function ListButtons() {
    return (
        <div className="list-buttons">
            <div>
                <Button bg={'#471b44'} text={'Morado'}/>
                <Button bg={'#149f1b'} text={'Verde'}/>
                <Button bg={'#171ea9'} text={'Azul'}/>
            </div>
        </div>
    )
}