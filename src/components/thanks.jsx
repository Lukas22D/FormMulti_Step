import {
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill
  } from 'react-icons/bs'

import './Thanks.css'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
}

const thanks = ({data}) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>Por favor, verefique suas informações antes de enviar</p>
      <p>Para conluir, somente clicar em enviar</p>
      <h3> Aqui está o resumo da sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário: </span>
        {data.comment}
      </p>
        
    </div>
  )
}

export default thanks