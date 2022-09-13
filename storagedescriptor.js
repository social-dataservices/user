module.exports = {
  record:{
    fields:[{
      name: 'nick',
      type: 'string',
      sqltype: 'nvarchar(100)',
      postgresqltype: 'text',
      nullable: true
    },{
      name: 'picture',
      type: 'string',
      sqltype: 'varchar(250)',
      postgresqltype: 'text',
      nullable: true
    },{
      name: 'location',
      type: 'geolocation',
      mssqltype: 'geography',
      postgresqltype: 'point',
      nullable: true,
    },{
      name: 'allow_notifications',
      type: 'number',
      mssqltype: 'bit',
      postgresqltype: 'boolean',
      nullable: true
    }]
  }
};
