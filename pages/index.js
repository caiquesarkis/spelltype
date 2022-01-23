import Link from "next/link"
import TextInputArea from "../components/TextInputArea"
export default function Home(props) {
  return (
    <div> 
      <div className="flex justify-center">
        <TextInputArea text={props} />
      </div>
    </div>
  )
}


export async function getStaticProps(){
  const text = `asldflj aslkdfj  alsdjkf lasdlf j alskdfjasdlk fjaskld fj
  asdf lkasdlfjk asd kllfja
  asd klfasdklf jsd`.split(" ")
  return {
    props: {text}, 
  }
}