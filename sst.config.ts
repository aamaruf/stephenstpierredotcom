import { SSTConfig } from 'sst';
import { Web } from './stacks/Web';
import { Api } from './stacks/Api';
import { Database } from './stacks/Database';
import { Default } from './stacks/Default';

export default {
  config(_input) {
    return {
      name: 'stephenstpierredotcom',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(Database).stack(Api).stack(Web).stack(Default);
  },
} satisfies SSTConfig;
