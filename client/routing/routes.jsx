import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../layout/MainLayout';
import ContentWrapper from '../content/ContentWrapper';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<ContentWrapper />)
		})
	}
});
