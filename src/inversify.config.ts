import { Container, injectable, unmanaged } from 'inversify'
import getDecorators from 'inversify-inject-decorators'

import { Actions } from './actions'


const container = new Container()
container.bind(Actions).toSelf()


export const { lazyInject } = getDecorators(container)
