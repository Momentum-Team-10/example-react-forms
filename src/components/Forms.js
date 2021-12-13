import { useState, useRef } from 'react'

// Usually we want to put the user input into our component's state
// This is an example of a _controlled_ component
export const InputField = () => {
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <div>
        <h2>What's in the input field becomes state!</h2>
        <p>And my component can use it however it wants. Like in its render:</p>
        <p>{text}</p>
      </div>
    </>
  )
}

// This component uses the useRef hook instead of storing form data in state
// This is an example of an _uncontrolled_ component
// We do this less commonly, only when we don't need the form data in our component
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

Radio buttons (and checkboxes) are different because they rely on a `checked` attribute
That is a boolean on the element
We want that in state so the component knows whether an attribute should render as checked in the DOM
export const RadioInput = () => {
  const [letter, setLetter] = useState()

  const handleChange = (event) => {
    setLetter(event.target.value)
  }
  return (
    <>
      <h2>Radio Buttons</h2>
      <form>
        <div>
          <input
            type="radio"
            value="a"
            checked={letter === 'a'}
            onChange={handleChange}
          />
          {'Option A'}
        </div>
        <div>
          <input
            type="radio"
            value="b"
            checked={letter === 'b'}
            onChange={handleChange}
          />
          {'Option B'}
        </div>
        <div>
          <input
            type="radio"
            value="c"
            checked={letter === 'c'}
            onChange={handleChange}
          />
          {'Option C'}
        </div>
      </form>
    </>
  )
}
