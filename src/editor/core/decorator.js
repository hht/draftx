import { CompositeDecorator } from 'draft-js'
import { entityStrategy } from './strategy'
import Link from '../component/Link'

export default new CompositeDecorator([
  {
    strategy: entityStrategy('LINK'),
    component: Link
  }
])
