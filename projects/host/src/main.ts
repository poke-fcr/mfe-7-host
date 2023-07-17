import { loadManifest } from '@angular-architects/module-federation';
import { environment } from './environments/environment'

loadManifest(environment.production ? 'assets/mf.manifest.prod.json' : 'assets/mf.manifest.json' )
.catch((err) => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch((err) => console.error(err));

console.log(environment.production)