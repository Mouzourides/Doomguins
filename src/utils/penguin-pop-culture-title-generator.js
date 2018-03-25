const _ = require('lodash')
const WORDS_EXCLUDE = ['to', 'a', 'an', 'and', 'the', 'for', 'of'] // Numbers too?
const results = [
  {name: 'Four Letter Lie', type: 'music'},
  {name: 'Emarosa', type: 'music'},
  {name: '8 Out Of 10 Cats', type: 'show'},
  {name: 'Owl City', type: 'music'},
  {
    name: 'Harry Potter And The Half-Blood Prince',
    type: 'movie'
  },
  {name: 'Blink-182', type: 'music'},
  {
    name: 'Harry Potter And The Order Of The Phoenix',
    type: 'movie'
  },
  {name: 'The White Stripes', type: 'music'},
  {
    name: 'Harry Potter And The Chamber Of Secrets',
    type: 'movie'
  },
  {name: 'Foo Fighters', type: 'music'},
  {name: 'Muse', type: 'music'},
  {name: 'Linkin Park', type: 'music'},
  {name: 'Supernatural', type: 'show'},
  {name: 'The Matrix', type: 'movie'}
] // Let's build a file for this

module.exports = function () {
  const names = []

  results.forEach(res => {
    if (res.name.split(' ').length > 1) {
      const indexes = res.name.split(' ').map((word, idx) => {
        if (!WORDS_EXCLUDE.includes(word.toLowerCase())) return idx
      })
      const indexToReplace = getRandomEleFromArray(_.compact(indexes))
      const newName = res.name.split(' ').map((word, idx) => {
        if (idx === indexToReplace) return word[word.length - 1] === 's' ? 'Penguins' : 'Penguin'
        else return word
      })
      names.push(newName.join(' '))
    }
  })

  return getRandomEleFromArray(names)
}

function getRandomEleFromArray (array) {
  return array[Math.floor(Math.random() * array.length)]
}
