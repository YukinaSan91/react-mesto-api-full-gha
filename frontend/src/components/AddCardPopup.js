import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddCardPopup({isOpen, onClose, onAddPlace}) {
    const [placeName, setPlaceName] = useState("");
    const [link, setLink] = useState("");

  useEffect(() => {
    setPlaceName("");
    setLink("");
  }, [isOpen]);
  
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: placeName,
      link: link,
    });
  };

  function handlePlaceNameChange(evt) {
    setPlaceName(evt.target.value);
  };

  function handleLinkChange(evt) {
    setLink(evt.target.value)
  };

  return (
    <PopupWithForm 
      name="add" 
      title="Новое место" 
      buttonText="Создать"
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}>
      <input
        id="input-title"
        className="popup__text popup__text_type_title"
        name="name"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={placeName}
        onChange={handlePlaceNameChange}
        required/>
      <span className="input-title-error popup__text-input-error" type="text"></span>
      <input
        id="input-url"
        className="popup__text popup__text_type_url"
        name="url"
        type="url"
        placeholder="Ссылка на картинку"
        value={link}
        onChange={handleLinkChange}
        required/>
      <span className="input-url-error popup__text-input-error" type="text"></span>
    </PopupWithForm>
  );
}

export default AddCardPopup;