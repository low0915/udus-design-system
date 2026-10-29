const groups = {
  'Getting started': ['Workspace', 'Slides'],
  'Core components': ['Button', 'IconButton', 'Input', 'Checkbox', 'Radio', 'Chip', 'Badge', 'StatusPill', 'Icon', 'Logo', 'LogoIcon', 'BrandMark'],
  'Layout and navigation': ['Card', 'Disclosure', 'NavItem', 'Breadcrumb', 'TabBar'],
  'Agent and data': ['PromptConsole', 'UserMessage', 'AgentMessage', 'ReasoningStep', 'ConnectorRow', 'MetricCapsule', 'ProgressRing', 'Sparkline', 'CodeBlock'],
  'Brand recipes': ['GlassGrid', 'Cover', 'Charts', 'Slide recipes']
};
const descriptions = {
  Workspace: 'Explore the conversation workspace, navigation, inspector, and theme switcher.',
  Slides: 'Approved slide compositions and visual references.',
  GlassGrid: 'A marketing and presentation background treatment.',
  Charts: 'Editable chart recipes for presentations. Example data is illustrative.',
  'Slide recipes': 'Earlier editable slide recipes. The approved slide guide takes precedence.'
};
const nav = document.querySelector('#navigation');
const search = document.querySelector('#search');
const frame = document.querySelector('#preview');
const themeButton = document.querySelector('#theme');
let selected = 'Workspace';
let theme = 'dark';
let loadSequence = 0;
function renderNavigation() {
  nav.replaceChildren();
  for (const [group, names] of Object.entries(groups)) {
    const matches = names.filter(name => name.toLowerCase().includes(search.value.toLowerCase().trim()));
    if (!matches.length) continue;
    const heading = document.createElement('div'); heading.className = 'group'; heading.textContent = group; nav.append(heading);
    for (const name of matches) {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'nav-button'; button.textContent = name;
      if (name === selected) button.setAttribute('aria-current', 'page');
      button.addEventListener('click', () => { selected = name; renderNavigation(); loadPreview(); });
      nav.append(button);
    }
  }
}
async function loadPreview() {
  const sequence = ++loadSequence;
  document.querySelector('#title').textContent = selected;
  document.querySelector('#description').textContent = descriptions[selected] || `Explore the ${selected} examples and interactive states.`;
  const notice = document.querySelector('#notice'); notice.hidden = true;
  const path = selected === 'Slide recipes' ? '../components/Slides/recipes.html' : `../components/${selected}/preview.html`;
  const url = new URL(path, location.href);
  try {
    const response = await fetch(url); if (!response.ok) throw new Error(`HTTP ${response.status}`);
    let html = await response.text(); if (sequence !== loadSequence) return;
    const root = new URL('../', location.href);
    const head = `<base href="${url.href}"><link rel="stylesheet" href="${new URL('tokens.css', root)}"><link rel="stylesheet" href="${new URL('components/bundle.css', root)}"><link rel="stylesheet" href="${new URL('preview-app/vendor/fonts.css', root)}"><script src="${new URL('preview-app/vendor/react.production.min.js', root)}"><\/script><script src="${new URL('preview-app/vendor/react-dom.production.min.js', root)}"><\/script><script src="${new URL('components/bundle.js', root)}"><\/script>`;
    html = html.replace(/<html([^>]*)>/i, `<html$1 data-theme="${theme}">`).replace(/<head([^>]*)>/i, `<head$1>${head}`);
    frame.srcdoc = html;
  } catch (error) {
    if (sequence !== loadSequence) return;
    frame.srcdoc = '';
    notice.hidden = false;
    notice.textContent = 'Could not load this preview. Open the gallery through a local web server and check your network connection.';
    console.error(error);
  }
}
search.addEventListener('input', renderNavigation);
themeButton.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === 'dark' ? 'Light theme' : 'Dark theme';
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  loadPreview();
});
renderNavigation(); loadPreview();
