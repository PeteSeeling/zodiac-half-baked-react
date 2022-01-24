import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return <div className = "zodiac-card">
    {props.name}
    {props.dates}
    <img src={`/images/${props.name}.png`}/>

  </div>
}
