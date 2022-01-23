import { useEffect, useState } from "react"

  function textToObject(text){
     return text.map((word,i)=>{
      return(
      word.split("").map((letter,j)=>{
            return {
              letter: letter,
              wordIndex: i,
              wasTyped: false,
              wasTypedWrong: false
            }
          })
        ) 
    })
  }


export default function TextInputArea(props) {
  const [text, setText] = useState(props.text.text)
  const [selectedWordIndex,setSelectedWordIndex] = useState(0)
  const [words, setWords] = useState(textToObject(text))


  function handleKeyTyped({key}){
    console.log("Keypressed",key)
    words.map((word)=>{
      word.map((letter,index)=>{
        if(letter.letter === key && !letter.wasTyped){
          key=""
          letter.wasTyped = true
          letter.wasTypedWrong = false
        }
      })
    })

    setWords([...words])
  }

  useEffect(()=>{
    window.addEventListener("keydown",handleKeyTyped)
  },[])


  return (
      <div id="text-container" className="flex-row bg-gray-light mt-20 mb-20 h-56 p-12">
        {words?.map((word,i)=>{
          return(
            <span id="word-container" className="pr-6 " key={i}>
              {word.map((letter,j)=>{
                return(
                  <letter key={j} className= {`text-gray text-3xl ${(letter.wasTyped)?"text-green": "" }`} >
                    {letter.letter}
                  </letter>
                )
              })}
          </span>
          )
          
        })}
      </div>
  )
}


