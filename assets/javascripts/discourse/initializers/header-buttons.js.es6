import { withPluginApi } from 'discourse/lib/plugin-api';

function initializeWithApi(api) {
  const siteC = api.container.lookup('site:main'),
    notMobile = !siteC.get('mobileView'),
    gitBranch = siteC.get('git_branch'),
    gitVersion = siteC.get('git_version');

  api.decorateWidget('header-buttons:before', helper => {
    return helper.attach('link', {
      rawLabel: "回主站",
      className: 'btn btn-default btn-small stage-site-link',
      href: "https://meta.discoursecn.org/" });
  });
  api.decorateWidget('header-buttons:before', helper => {
    const notInTopic = !helper.attrs.topic;

    if (notMobile && notInTopic) {
      return helper.attach('link', {
        rawLabel: gitBranch,
        className: 'btn btn-default btn-small stage-site-link-version stage-site-link',
        href: "https://github.com/discourse/discourse/commit/" + gitVersion });
    }
  });
}

export default {
  name: 'master_slaves',
  initialize() {
    withPluginApi('0.4', initializeWithApi);

  }
};

