/**
 * Install plugin.
 */

function install(Vue) {

    Object.defineProperty(Vue.prototype, '$alert', {

        get: function () {
            var AlertConstructor = Vue.extend(require('./alert.vue'));

            return (message) => {
                new AlertConstructor({
                    el: document.body
                });
            };
        }

    });
}

if (window.Vue) {
    Vue.use(install);
}

module.exports = install;
