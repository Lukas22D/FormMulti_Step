//Components 
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/userForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/thanks'
import Steps from './components/Steps'

// Styles
import './App.css'

// Hooks
import { useForm } from './Hooks/useForm'
import { useState } from 'react'



function App() {

  const formTemplate = {
    name: '',
    email: '',
    review: '',
    comment: '',
  };

  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler} />, <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />, <Thanks data={data} />]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (

    <div className="app">
      <div className="header">
        <h2> Deixe sua avaliação</h2>
        <p>
          <span>★</span>
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container"> {currentComponent}</div>
          <div className="actions">
            {isFirstStep ? null
              :
              (<button type="button" onClick={(e) => changeStep(currentStep - 1, e)}>
                <GrFormPrevious />
                <span>voltar</span>
              </button>)}
            {isLastStep ?
              (<button type="submit">Enviar<FiSend /></button>)
              :
              (<button type="submit">Próximo <GrFormNext /></button>)}
          </div>
        </form>
      </div>
    </div>

  )
}

export default App
