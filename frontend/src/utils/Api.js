class Api {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  };

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    };

    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getAllInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  };

  getUserInfo() {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkingResponse);
  };

  getInitialCards() {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkingResponse);
  };

  editUserProfile({name, about}) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
    .then(this._checkingResponse);
  };

  editUserAvatar(avatar) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        avatar,
      }),
    })
    .then(this._checkingResponse);
  };

  addNewCard(data) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
    .then(this._checkingResponse);
  };

  deleteUserCard(cardId) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkingResponse);
  };

  _addLikeCard(cardId) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
    .then(this._checkingResponse);
  };

  _deleteLikeCard(cardId) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
    .then(this._checkingResponse);
  };

  toggleCardLike(cardId, isLiked) {
    return isLiked ? this._addLikeCard(cardId) : this._deleteLikeCard(cardId);
  };
}

export const api = new Api({
  //baseUrl: 'http://localhost:3000/',
  baseUrl: 'https://api.yukina91.nomoredomains.work/',
});
