import type { Config } from '@japa/runner/types';

import app from '@adonisjs/core/services/app';
import testUtils from '@adonisjs/core/services/test_utils';
import { apiClient } from '@japa/api-client';
import { assert } from '@japa/assert';
import { pluginAdonisJS } from '@japa/plugin-adonisjs';

export const plugins: Config['plugins'] = [assert(), apiClient(), pluginAdonisJS(app)];

export const runnerHooks: Required<Pick<Config, 'setup' | 'teardown'>> = {
	setup: [() => testUtils.db().migrate()],
	teardown: [],
};

export const configureSuite: Config['configureSuite'] = (suite) => {
	if (['browser', 'functional', 'e2e'].includes(suite.name)) {
		return suite.setup(() => testUtils.httpServer().start());
	}
};

export const reporters: Config['reporters'] = {
	activated: ['spec'],
};
