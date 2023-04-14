import s from "./Button.module.scss"

const Button = ({ content, svg, handleClick }) => {
  return (
    <div onClick={handleClick}>
      <button className={s.button__more}>
        <span>{content}</span>
        <div>{svg}</div>
      </button>
    </div>
  )
}
export default Button
