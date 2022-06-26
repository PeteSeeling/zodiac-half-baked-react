import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return <div className = "zodiac-card">
    {props.name}
    <img src={`/images/${props.name}.png`}/>
    {props.dates}
  </div>
}
