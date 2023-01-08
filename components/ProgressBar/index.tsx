interface Props {
  value: number
}

const ProgressBar = ({ value = 10 }: Props) => {
  return (
    <progress className="nes-progress is-success" value={value} max="100" />
  )
}

export default ProgressBar
