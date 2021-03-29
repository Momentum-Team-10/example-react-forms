import { useState, useRef } from 'react'

export const InputField = () => {
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value)
  }
  return <input type="text" value={text} onChange={handleChange} />
}

export const RefInput = () => {
  const input = useRef()
  const showValue = () => {
    alert(`Input contains: ${input.current.value}`)
  }
  return (
    <div>
      <h2>Ref input</h2>
      <input type="text" ref={input} />{' '}
      <button onClick={showValue}>Alert the Value!</button>
    </div>
  )
}

export const RadioInput = () => {
  const [letter, setLetter] = useState()

  const handleChange = (event) => {
    setLetter(event.target.value)
  }
  return (
    <>
      <h2>Radio Buttons</h2>
      <form>
        <input
          type="radio"
          value="a"
          checked={letter === 'a'}
          onChange={handleChange}
        />
        {'Option A'}
        <input
          type="radio"
          value="b"
          checked={letter === 'b'}
          onChange={handleChange}
        />
        {'Option B'}
        <input
          type="radio"
          value="c"
          checked={letter === 'c'}
          onChange={handleChange}
        />
        {'Option C'}
      </form>
    </>
  )
}
