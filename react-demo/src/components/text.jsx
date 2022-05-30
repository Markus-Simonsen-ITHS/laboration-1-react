export default function(props) {
  let { text } = props
  text = text + text;
  
  return <h1>{text}</h1>
}
