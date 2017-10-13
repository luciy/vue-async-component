import SyncComponent from './sync-component.vue';

SyncComponent.install = function(Vue) {
  Vue.component(SyncComponent.name, SyncComponent);
};

export default SyncComponent;
