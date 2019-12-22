import { ref } from '@vue/composition-api'

export default function contentsStore() {
  const state = {
    user: {
      id: ref(0),
      name: ref(''),
      email: ref(''),
      photoSrc: ref('')
    },
    users: ref([
      {
        id: 0,
        name: '田中 太郎',
        email: 'tanaka@sample.com'
      },
      {
        id: 1,
        name: '佐藤 次郎',
        email: 'sato@sample.com'
      },
      {
        id: 2,
        name: '斎藤 三郎',
        email: 'saito@sample.com'
      }
    ])
  }
  return { ...state }
}
