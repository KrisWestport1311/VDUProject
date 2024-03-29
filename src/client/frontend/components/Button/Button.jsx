import './button.scss'

const STYLES = ['btn-primary', 'btn--outline']

const SIZES = ['btn-medium','btn--large', 'btn--mobile', 'btn--mobile']

const COLOR = ['primary', 'blue','red','green']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? 
    buttonStyle : STYLES[0];

    const checkButtonSize = STYLES.includes(buttonSize) ? 
    buttonSize : SIZES[0];

    const checkButtonColor = STYLES.includes(buttonColor) ? 
    buttonColor : null;


    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}
        </button>
)
}
  