import firebase from './firebase'

class Database {
  constructor () {
    this.db = firebase.database()
  }

  getPets () {
    return this.db.ref('/pets').once('value').then(snapshot => {
      console.log('snapshot.val()', snapshot.val())
      let categories = snapshot.val()
      let data = Object.keys(categories).map(key => {
        const category = categories[key]
        return {id: key, ...category}
      })
      console.log('data', data)
      return data
    })
  }
}

export default Database
