import { createRoot } from 'react-dom/client';

import Edito from 'src/components/Edito';

const rootReactElement = <Edito />;

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
