import { format } from 'date-fns'

export default ({ _ }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('formatDate', (date, dateFormat) => format(date, dateFormat))
}
