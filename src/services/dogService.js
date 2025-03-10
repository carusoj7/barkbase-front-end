import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/dogs`

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch ( err ) {
    console.log(err)
  }
}

async function create(dogFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dogFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(dogFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${dogFormData._id}`,{
      method: 'PUT',
      headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dogFormData)
    })
    return res.json()
  } catch(error) {
    console.log(error)
  }
}

async function show(dogId) {
  try {
    const res = await fetch(`${BASE_URL}/${dogId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function deleteDog(dogId) {
  try {
    const res= await fetch(`${BASE_URL}/${dogId}`, {
      method:'Delete',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createComment(dogId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${dogId}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

const updateComment = async (dogId, commentId, commentFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${dogId}/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteComment = async (dogId, commentId) => {
  try {
    const res = await fetch(`${BASE_URL}/${dogId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {index, create, update, show, deleteDog, createComment, updateComment, deleteComment}
