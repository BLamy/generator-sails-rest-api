var requiresLogin = function (answers) {
    return (['PostgreSQL', 'MySQL', 'Mongo', 'SQLServer', 'Redis', 'OrientDB'].indexOf(answers['database:adapter']) !== -1);
};
var isDynamoDB = function (answers) {
    return (['DynamoDB'].indexOf(answers['database:adapter']) !== -1);
};
module.exports = [{
  type: 'list',
  name: 'database:adapter',
  message: 'Choose database adapter',
  default: 2,
  choices: [
    'PostgreSQL',
    'MySQL',
    'Mongo',
    'Memory',
    'Disk',
    'SQLServer',
    'Redis',
    'OrientDB',
    'DynamoDB'
  ]
}, {
  type: 'input',
  name: 'database:host',
  message: 'Type your database host',
  default: 'localhost',
  when: requiresLogin
}, {
  type: 'input',
  name: 'database:name',
  message: 'Type your database name',
  default: 'sails-rest-api',
  when: requiresLogin
}, {
  type: 'input',
  name: 'database:username',
  message: 'Type your database username',
  default: '',
  when: requiresLogin
}, {
  type: 'password',
  name: 'database:password',
  message: 'Type your database password',
  default: '',
  when: requiresLogin
}, {
  type: 'input',
  name: 'database:dynamo:access-key-id',
  message: 'Type your DynamoDB Access Key ID',
  default: '',
  when:isDynamoDB
}, {
  type: 'input',
  name: 'database:dynamo:secret-access-key',
  message: 'Type your DynamoDB Secret Access Key',
  default: '',
  when: isDynamoDB
}, {
  type: 'input',
  name: 'database:dynamo:region',
  message: 'Type your DynamoDB region',
  default: 'us-west-1',
  when: isDynamoDB
}];
