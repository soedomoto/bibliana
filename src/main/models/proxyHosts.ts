import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Proxies, ProxiesId } from './proxies'

export interface ProxyHostsAttributes {
  hostID?: number
  proxyID?: number
  hostname?: string
}

export type ProxyHostsPk = 'hostID'
export type ProxyHostsId = ProxyHosts[ProxyHostsPk]
export type ProxyHostsOptionalAttributes = 'hostID' | 'proxyID' | 'hostname'
export type ProxyHostsCreationAttributes = Optional<
  ProxyHostsAttributes,
  ProxyHostsOptionalAttributes
>

export class ProxyHosts
  extends Model<ProxyHostsAttributes, ProxyHostsCreationAttributes>
  implements ProxyHostsAttributes
{
  hostID?: number
  proxyID?: number
  hostname?: string

  // ProxyHosts belongsTo Proxies via proxyID
  proxy!: Proxies
  getProxy!: Sequelize.BelongsToGetAssociationMixin<Proxies>
  setProxy!: Sequelize.BelongsToSetAssociationMixin<Proxies, ProxiesId>
  createProxy!: Sequelize.BelongsToCreateAssociationMixin<Proxies>

  static initModel(sequelize: Sequelize.Sequelize): typeof ProxyHosts {
    return ProxyHosts.init(
      {
        hostID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        proxyID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'proxies',
            key: 'proxyID'
          }
        },
        hostname: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'proxyHosts',
        timestamps: false,
        indexes: [
          {
            name: 'proxyHosts_proxyID',
            fields: [{ name: 'proxyID' }]
          }
        ]
      }
    )
  }
}
