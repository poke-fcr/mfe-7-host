import { environment } from './environments/environment';
import('./bootstrap')
	.catch(err => console.error(err));

	console.log('inside remote 1',environment.production)