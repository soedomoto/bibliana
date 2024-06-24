import { protocol } from 'electron'
import Fastify from 'fastify'
import { registerProtocol } from 'electron-server'
import { Sequelize } from 'sequelize'
import { Items as _Items, ItemData as _ItemData, initModels } from '../models/init-models'

protocol.registerSchemesAsPrivileged([
  { scheme: 'bibliana', privileges: { standard: true, secure: true, supportFetchAPI: true } }
])

export default async function initServer() {
  const sequelize = new Sequelize({
    logging: console.log,
    dialect: 'sqlite',
    storage: './zotero.sqlite'
  })

  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

    const Items = _Items.initModel(sequelize)
    const ItemData = _ItemData.initModel(sequelize)
    ItemData.belongsTo(Items, { foreignKey: 'itemID' })
    Items.hasMany(ItemData, { foreignKey: 'itemID' })

    // const models = initModels(sequelize)

    const server = Fastify({ ignoreTrailingSlash: true })
    server.get('/hello-world', async () => {
      const users = await Items.findAll({
        attributes: {
          exclude: ['id', 'ItemData.id']
        },
        include: {
          model: ItemData,
          attributes: {
            exclude: ['id']
          }
        }
      })

      return { data: users }
    })

    registerProtocol({ scheme: 'bibliana', server })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
