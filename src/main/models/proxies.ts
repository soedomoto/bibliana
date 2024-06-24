import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { ProxyHosts, ProxyHostsId } from './proxyHosts'

export interface ProxiesAttributes {
  proxyID?: number
  multiHost?: number
  autoAssociate?: number
  scheme?: string
}

export type ProxiesPk = 'proxyID'
export type ProxiesId = Proxies[ProxiesPk]
export type ProxiesOptionalAttributes = 'proxyID' | 'multiHost' | 'autoAssociate' | 'scheme'
export type ProxiesCreationAttributes = Optional<ProxiesAttributes, ProxiesOptionalAttributes>

export class Proxies
  extends Model<ProxiesAttributes, ProxiesCreationAttributes>
  implements ProxiesAttributes
{
  proxyID?: number
  multiHost?: number
  autoAssociate?: number
  scheme?: string

  // Proxies hasMany ProxyHosts via proxyID
  proxyHosts!: ProxyHosts[]
  getProxyHosts!: Sequelize.HasManyGetAssociationsMixin<ProxyHosts>
  setProxyHosts!: Sequelize.HasManySetAssociationsMixin<ProxyHosts, ProxyHostsId>
  addProxyHost!: Sequelize.HasManyAddAssociationMixin<ProxyHosts, ProxyHostsId>
  addProxyHosts!: Sequelize.HasManyAddAssociationsMixin<ProxyHosts, ProxyHostsId>
  createProxyHost!: Sequelize.HasManyCreateAssociationMixin<ProxyHosts>
  removeProxyHost!: Sequelize.HasManyRemoveAssociationMixin<ProxyHosts, ProxyHostsId>
  removeProxyHosts!: Sequelize.HasManyRemoveAssociationsMixin<ProxyHosts, ProxyHostsId>
  hasProxyHost!: Sequelize.HasManyHasAssociationMixin<ProxyHosts, ProxyHostsId>
  hasProxyHosts!: Sequelize.HasManyHasAssociationsMixin<ProxyHosts, ProxyHostsId>
  countProxyHosts!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof Proxies {
    return Proxies.init(
      {
        proxyID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        multiHost: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        autoAssociate: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        scheme: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'proxies',
        timestamps: false
      }
    )
  }
}
