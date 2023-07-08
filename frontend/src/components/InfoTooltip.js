import successfully from '../images/successfully.svg'
import notSuccessful from '../images/not_successful.svg'
import usePopupClose from "../hooks/usePopupClose";

function InfoTooltip({isOpen, onClose, successful}) {
  usePopupClose(isOpen, onClose);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_infotooltip">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <img 
          className="popup__icon" 
          src={successful ? successfully : notSuccessful} 
          alt={successful ? "Успешная регистрация" : "Не успешная регистрация"}/>
        <h3 className="popup__heading popup__heading_type_infotooltip">{successful ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте еще раз."}</h3>
      </div>
    </div>
  )
}

export default InfoTooltip;