interface CircleProps {
    color: string,
    setBackgroundColor: CallableFunction
}

const Circle:React.FC<CircleProps> = ({color, setBackgroundColor}) => {
    const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent> | any) => {
        try {
            setBackgroundColor(e.target.style.background);
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <div className="circle" style={{background: color}}  onClick={handleClick}></div>
    );
}

export default Circle;