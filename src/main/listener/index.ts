import { ipcMain } from 'electron'
import { Sequelize } from 'sequelize'
import { initModels } from '../models/init-models'

export default async function initListener(): Promise<void> {
  const sequelize = new Sequelize({
    logging: console.log,
    dialect: 'sqlite',
    storage: './zotero.sqlite'
  })

  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

    const models = initModels(sequelize)

    const users = await models.Items.findAll({
      attributes: {
        exclude: ['id', 'ItemData.id']
      },
      include: {
        model: models.ItemData,
        attributes: {
          exclude: ['id']
        }
      }
    })
    // console.log(users.every(user => user instanceof User)); // true
    console.log('All users:', JSON.stringify(users.splice(0, 5), null, 2))
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  ipcMain.on('ping', () => console.log('pong'))
}
