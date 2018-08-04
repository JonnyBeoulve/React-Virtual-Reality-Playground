import { ReactInstance } from 'react-360-web';

/* ======================================================================
// Initialize React 360 functionality.
====================================================================== */
function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  /* ======================================================================
  // Render app content to cylinder surface.
  ====================================================================== */
  r360.renderToSurface(
    r360.createRoot('ReactVirtualRealityPlayground', {}),
    r360.getDefaultSurface()
  );

  /* ======================================================================
  // Load the default environment.
  ====================================================================== */
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
